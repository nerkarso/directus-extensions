import type { HookConfig } from '@directus/extensions';

const hook: HookConfig = ({ embed }) => {
  embed(
    'body',
    /* html */ `
		<script>
			function injectAttribute(name, value) {
				if (!value) return;
				const sanitizedValue = value.toLowerCase().replace(/\\s/g, '-');
				document.body.setAttribute(name, sanitizedValue);
			}
			(async () => {
				try {
					const response = await fetch(window.location.origin + '/users/me?fields=id,role.name').then((res) => res.json());
					injectAttribute('data-user-id', response?.data?.id);
					injectAttribute('data-user-role', response?.data?.role?.name);
				} catch (error) {
					console.error('[current-role-hook]', error.message);
				}
			})();
		</script>
		`
  );
};

export default hook;
