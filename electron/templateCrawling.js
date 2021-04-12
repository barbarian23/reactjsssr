const crawling = (text) => {
    return new Promise(res => res(`
    <style>
    .crawl-loading-parent{
        position: relative;
        height: 100px;
    }
    
    .crawl-login-loading{
        width:200px;
        height:60px;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
    }
    .crawl-login-loading .circle{
        width:20px;
        height:20px;
        position: absolute;
        border-radius: 50%;
        background-color: #79ff4d;
        left:15%;
        transform-origin: 50%;
        animation: circle .5s alternate infinite ease;
    }
    
    @keyframes circle{
        0%{
            top:60px;
            height:5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
        }
        40%{
            height:20px;
            border-radius: 50%;
            transform: scaleX(1);
        }
        100%{
            top:0%;
        }
    }
    .crawl-login-loading .circle:nth-child(2){
        left:45%;
        animation-delay: .2s;
    }
    .crawl-login-loading .circle:nth-child(3){
        left:auto;
        right:15%;
        animation-delay: .3s;
    }
    .crawl-login-loading .shadow{
        width:20px;
        height:4px;
        border-radius: 50%;
        background-color: #33cc00;
        position: absolute;
        top:62px;
        transform-origin: 50%;
        z-index: -1;
        left:15%;
        filter: blur(1px);
        animation: shadow .5s alternate infinite ease;
    }
    
    @keyframes shadow{
        0%{
            transform: scaleX(1.5);
        }
        40%{
            transform: scaleX(1);
            opacity: .7;
        }
        100%{
            transform: scaleX(.2);
            opacity: .4;
        }
    }
    .crawl-login-loading .shadow:nth-child(4){
        left: 45%;
        animation-delay: .2s
    }
    .crawl-login-loading .shadow:nth-child(5){
        left:auto;
        right:15%;
        animation-delay: .3s;
    }
    .crawl-login-loading span{
        position: absolute;
        top:75px;
        font-family: 'Lato';
        font-size: 20px;
        letter-spacing: 12px;
        left:15%;
    }
    </style>
    <div class="crawl-loading-parent" id="crawl_login_progress_bar">
            <div class="crawl-login-loading">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
        </div>
    <h4 id="crawl_login_error_text" style="text-align:center">${text}</h4>`));
}

export default crawling; 