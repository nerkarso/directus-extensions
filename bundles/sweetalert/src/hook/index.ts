import type { HookConfig } from '@directus/extensions';

const hook: HookConfig = ({ embed }) => {
  embed(
    'body',
    /* html */ `
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/dist/sweetalert2.min.js"></script>
      <script>
        // Append after other styles to avoid breakage
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/dist/sweetalert2.min.css';
        document.head.appendChild(link);
      </script>
    `
  );
};

export default hook;
