import type { HookConfig } from '@directus/extensions';

const hook: HookConfig = ({ embed }) => {
  embed(
    'body',
    /* html */ `
		<script>
			(async () => {
				try {
					const userResp = await fetch(window.location.origin + '/users/me?fields=role.name').then((res) => res.json());
					const roleName = userResp?.data?.role?.name;
					if (roleName) {
						const role = roleName.toLowerCase().replace(/\\s/g, '-');
						document.body.setAttribute('data-user-role', role);
					}
				} catch (error) {
					console.error('[current-role-hook]', error.message);
				}
			})();
		</script>
		`
  );
};

export default hook;
