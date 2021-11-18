if ('serviceWorker' in navigator) 
{
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./ServidorW.js').then(function(registration) {
            console.log('Registro exitoso',registration.scope);
        }, function (err) {
            console.log('No se pudo registrar el service worker',err);
            
        });
        
    }); 
}