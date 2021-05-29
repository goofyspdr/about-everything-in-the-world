
(function () {

    var socialShare = {
        // config: config,
        scope: function () {
            var scope = document.querySelectorAll('[data-social-share]');
            return scope;
        },
        getCurrentUrl: function () {
            var shareUrl = window.location.href;
            return shareUrl;
        },
        getTitle: function () {
            var title = document.querySelectorAll('title')[0];
            if (title) {
                title = title.innerText;
                return title;
            }
        },
        getImg: function () {
            var img = document.querySelectorAll('meta[property="og:image"]')[0].content;
            return img;
        },
        status: function (platformName) {
            var status = this['config']['platform'][platformName]['status'];
            return status;
        },
        getShareBtnArr: function (i) {
            var shareBtnArr = this.scope()[i].children;
            return shareBtnArr;
        },
        constructShareUrl: function (platformName) {
            var baseUrl = this['config']['platform'][platformName]['baseUrl'];
            var currentUrl = this.getCurrentUrl();
            var title = this.getTitle();
            var img = this.getImg();
            var emailBody = '';
            var shareUrl;
            switch (platformName) {
                case 'facebook':
                    shareUrl = baseUrl + currentUrl;
                    return shareUrl;
                case 'twitter':
                    shareUrl = baseUrl + currentUrl;
                    return shareUrl;
                case 'google':
                    shareUrl = baseUrl + currentUrl;
                    return shareUrl;
                case 'linkedin':
                    shareUrl = baseUrl + currentUrl + '&title=' + title;
                    return shareUrl;
                case 'pinterest':
                    shareUrl = baseUrl + currentUrl + '&media=' + img + '&description=' + title;
                    return shareUrl;
                case 'email':
                    shareUrl = baseUrl + title + '&body=' + emailBody + '%0D%0A' + title + '%0D%0A' + currentUrl;
                    return shareUrl;
            }
        },
        openWindow: function (platformName) {
            var shareUrl = this.constructShareUrl(platformName);
            var size = 'width=650, height=350';
            window.open(encodeURI(shareUrl), null, size);
        },
        action: function (platformName) {
            this.openWindow(platformName);
        },
        instance: function (platformName) {
            for (var i = 0; i < this.scope().length; i++) {
                for (var j = 0; j < this.getShareBtnArr(i).length; j++) {
                    if (this.getShareBtnArr(i)[j].dataset.share === platformName) {
                        var socialShare = this;
                        this.getShareBtnArr(i)[j].addEventListener('click', function () {
                            event.preventDefault();
                            socialShare.action(platformName);
                        }, false);
                    }
                }
            }
        },
        run: function () {
            for (var key in this.config.platform) {
                if (this.config.platform.hasOwnProperty(key)) {
                    if (this.status(key) === true) {
                        this.instance(key);
                    }
                }
            }
        },
        init: function () {
            var socialShare = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/js/config.json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    socialShare.config = JSON.parse(xhr.responseText);
                    socialShare.run();
                }
            };
            xhr.send();
        }
    };
    socialShare.init();

})();
