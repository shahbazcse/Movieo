function init(){
    // Raven.config(
    //     "https://1a8c43b2e39e4a1b8612b1535800c790@o4504084110245888.ingest.sentry.io/4504084116865024"
    // ).install();
}

function log(error){
    console.error(error);
    // Raven.captureException(error);
}

export default {
    init,
    log
};