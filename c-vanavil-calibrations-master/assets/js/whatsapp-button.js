var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?12748';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#00e785",
        "ctaText": "Chat with us",
        "borderRadius": "25",
        "marginLeft": "20",
        "marginRight": "20",
        "marginBottom": "20",
        "ctaIconWATI": true,
        "position": "left"
    },
    "brandSetting": {
        "brandName": "Vanavil Calibrations",
        "brandSubTitle": "Make It Simple, But Significant!",
        "brandImg": "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello, %0A I have a question about {{page_link}}",
        "backgroundColor": "#00e785",
        "ctaText": "Chat with us",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "919994913872"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);