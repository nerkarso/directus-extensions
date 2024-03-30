import type { HookConfig } from '@directus/extensions';

const hook: HookConfig = ({ embed }) => {
  embed(
    'body',
    /* html */ `
		<script>
			const EXTENSION_NAME = '[current-role-hook]';

			(async () => {
				let accessToken;

				try {
					const authResp = await fetch(window.location.origin + '/auth/refresh', {
						method: 'POST',
					}).then((res) => res.json());
					accessToken = authResp?.data.access_token;
				} catch (error) {
					console.error(EXTENSION_NAME, error.message);
				}

				if (!accessToken) return;

				try {
					const userResp = await fetch(window.location.origin + '/users/me?fields=role.name', {
						headers: {
							Authorization: 'Bearer ' + accessToken,
						},
					}).then((res) => res.json());
					const roleName = userResp?.data?.role?.name;
					if (roleName) {
						const role = roleName.toLowerCase().replace(/\\s/g, '-');
						document.body.setAttribute('data-user-role', role);
					}
				} catch (error) {
					console.error(EXTENSION_NAME, error.message);
				}
			})();
		</script>
		`
  );
};

export default hook;
