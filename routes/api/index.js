exports = module.exports = function (req, res) {
    const app = req.app;
  
    const _started = app.get('started');
    
    const started = new Date(_started).toISOString();
    const uptime = (Date.now() - _started) / 1000;
  
    return res.json({ started, uptime, });
  };
  