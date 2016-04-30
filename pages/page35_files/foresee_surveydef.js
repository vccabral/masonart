(function(){

    var FSR;

    // Do we support AMD?
    var supports_amd =
        typeof(window.define) === 'function' && window.define.amd &&
            (!window.FSR || window.FSR.supportsAMD);

    if(!supports_amd)
        FSR = window.FSR;
    else
        FSR = {};

    FSR.surveydefs = [{
    name: 'browse',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 20,
        lf: 3
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    repeatdays : 90,

    repeatoverride : false,

    altcookie : {
    },

    language : {
        locale : 'en'
    },

    exclude : {
		urls: ['behrchina']
    },
	/* Invite branding sample property
    brands : [{"c":"Foresee","p":33}, {"c":"Answers", "p":33}, {"c":"ForeseeByAnswers", "p":33}],
	*/
    zIndexPopup : 10000,

    ignoreWindowTopCheck : false,

    ipexclude : 'fsr$ip',

    mobileHeartbeat : {
        delay : 60, /*mobile on exit heartbeat delay seconds*/
        max : 3600  /*mobile on exit heartbeat max run time seconds*/
    },

    invite : {

        // For no site logo, comment this line:
        siteLogo : "sitelogo.gif",

        //alt text fore site logo img
		siteLogoAlt : "",

        /* Desktop */
        dialogs : [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
            noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
            attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
            closeInviteButtonText: "Click to close.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll give feedback",
            error: "Error",
            warnLaunch: "this will launch a new window"

        }]],

        exclude : {
            urls:['/consumer/customer-service', '/consumer/store-locator', '/consumer/shopping-cart', '/consumer/mybehr/log-in', '/consumer/mybehr/sign-up', '/consumer/products/write-a-review'],
            referrers:[],
            userAgents:[],
            browsers:[],
            cookies:[],
            variables:[]
			// [name (content), http-equiv (content), itemprop (content),  charset] possible attributes for meta tag element http://devdocs.io/html/meta
            // metas:[{"name":{"key":"value", "content":"value"}}, {"http-equiv":{"key":"value", "content":"value"}}, {"itemprop":{"key":"value", "content":"value"}}, {"charset":{"key":"value"}}]
        
        },
        include : {
            local : [ '.' ]
        },

        delay : 0,
        timeout : 0,

        hideOnClick : false,

        hideCloseButton : false,

        css : 'foresee_dhtml.css',

        hide : [],

        hideFlash: false,

        type : 'dhtml',
        /* desktop */
        // url: 'invite.html'
        /* mobile */
        url : 'invite-mobile.html',
        back: 'url'

        //SurveyMutex: 'SurveyMutex'
    },

    tracker : {
        width : '690',
        height : '415',
        timeout : 3,
		//pu: false,
        adjust : true,
        alert : {
            enabled : true,
            message : 'The survey is now available.'
        },
        url : 'tracker.html'
    },

    survey : {
        width : 690,
        height : 600
    },

    qualifier : {
        footer : '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
        width : '690',
        height : '500',
        bgcolor : '#333',
        opacity : 0.7,
        x : 'center',
        y : 'center',
        delay : 0,
        buttons : {
            accept : 'Continue'
        },
        hideOnClick : false,
        css : 'foresee_dhtml.css',
        url : 'qualifying.html'
    },

    cancel : {
        url : 'cancel.html',
        width : '690',
        height : '400'
    },

    pop : {
        what : 'survey',
        after : 'leaving-site',
        pu : false,
        tracker : true
    },

    meta : {
        referrer : true,
        terms : true,
        ref_url : true,
        url : true,
        url_params : false,
        user_agent : false,
        entry : false,
        entry_params : false,
		viewport_size: false,
        document_size: false,
        scroll_from_top: false,
		invite_URL: false
    },

    events : {
        enabled : true,
        id : true,
        codes : {
            purchase : 800,
            items : 801,
            dollars : 802,
            followup : 803,
            information : 804,
            content : 805
        },
        pd : 7,
        custom : {}
    },

    previous : false,

	analytics : {
		google_local : false,
		google_remote : false
	},

    cpps: {
        Behr_AppColorsmart: {
            source: 'cookie',
            name: 'Behr_AppColorsmart'
        },
        Behr_BrowseGalleries: {
            source: 'cookie',
            name: 'Behr_BrowseGalleries'
        },
        Behr_BrowseProducts: {
            source: 'cookie',
            name: 'Behr_BrowseProducts'
        },
        Behr_DesignLibrary: {
            source: 'cookie',
            name: 'Behr_DesignLibrary'
        },
        Behr_ExploreHowTo: {
            source: 'cookie',
            name: 'Behr_ExploreHowTo'
        },
        Behr_Inspiration: {
            source: 'cookie',
            name: 'Behr_Inspiration'
        },
        Behr_LoggedIn: {
            source: 'cookie',
            name: 'Behr_LoggedIn'
        },
        Behr_StoreLocator: {
            source: 'cookie',
            name: 'Behr_StoreLocator'
        },
        Behr_Canada: {
            source: 'url',
            init: 'No',
            patterns: [{
                regex: '/consumer_ca',
                value: 'Yes'
            }]
        }
    },

    mode : 'first-party'
};

    if(supports_amd)
        define(function(){ return FSR; })
})();
