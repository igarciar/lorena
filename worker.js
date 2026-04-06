export default {async fetch(req, env){ const url=new URL(req.url); return env.ASSETS.fetch(req); }}; 
