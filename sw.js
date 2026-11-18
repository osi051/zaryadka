self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(x){d={title:'EV ЗАРЯДКА',body:e.data?e.data.text():''}}
e.waitUntil(self.registration.showNotification(d.title||'EV ЗАРЯДКА',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',vibrate:[250,120,250],data:{url:d.url||''}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();const u=(e.notification.data&&e.notification.data.url)||'./';
e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if(c.url===u&&'focus' in c)return c.focus()}return self.clients.openWindow(u)}))});
