export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname.startsWith('/r2/')) {
      const key = url.pathname.replace('/r2/', '');
      const file = await env.ARTISTAR2.get(key);
      if (!file) return new Response('Not found', {status:404});
      return new Response(file.body, { headers:{ 'Content-Type': file.httpMetadata?.contentType || 'application/octet-stream', 'Access-Control-Allow-Origin':'*' } });
    }
    else if (url.pathname.startsWith('/src/content/')) {
      const key = url.pathname.replace('/src/content/', '');
      const file = await env.ARTISTAR2.get(key);
      if (!file) return new Response('Not found', {status:404});
      return new Response(file.body, { headers:{ 'Content-Type': file.httpMetadata?.contentType || 'text/markdown', 'Access-Control-Allow-Origin':'*' } });
    }
    return env.ASSETS.fetch(req);
  }
};