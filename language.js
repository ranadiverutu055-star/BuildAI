
/* =========================================================
   BUILDAI - LANGUAGE + DARK MODE MANAGER
   English | Marathi | Hindi
   ========================================================= */

(function () {
    "use strict";

    const LANGUAGE_KEY = "buildai-language";
    const THEME_KEY = "buildai-dark-mode";
    const DEFAULT_LANGUAGE = "en";

    const translations = {
        en: {
            dashboard: "Dashboard",
            prediction: "Prediction",
            history: "History",
            reports: "Reports",
            settings: "Settings",
            logout: "Logout",
            workspace: "Workspace",
            dashboardOverview: "Dashboard Overview",
            searchPredictions: "Search predictions...",
            buildaiAccount: "BuildAI Account",
            myProfile: "My Profile",
            profileDescription: "Name, email and profile information",
            accountSettings: "Account Settings",
            settingsDescription: "Password and application preferences",
            myPredictions: "My Predictions",
            predictionsDescription: "Your previous cost estimates",
            notifications: "Notifications",
            notificationsDescription: "Prediction and account updates",
            welcomeBack: "Welcome back,",
            workspaceEyebrow: "Your project workspace",
            dashboardIntro: "Track your construction estimates and plan your next project with confidence.",
            newPrediction: "New Prediction",
            totalPredictions: "Total Predictions",
            savedEstimates: "Your saved estimates",
            todaysPredictions: "Today's Predictions",
            estimatesToday: "Estimates created today",
            averageEstimatedCost: "Average Estimated Cost",
            averageAcrossEstimates: "Average across your estimates",
            constructionCostAnalysis: "Construction Cost Analysis",
            recentPredictionCosts: "Costs from your recent predictions",
            materialPriceReference: "Material Price Reference",
            illustrativeRates: "Illustrative planning rates",
            cement: "Cement",
            perBag: "Per bag",
            steel: "Steel",
            perKg: "Per kg",
            sand: "Sand",
            perCft: "Per CFT",
            bricks: "Bricks",
            perPiece: "Per piece",
            aggregate: "Aggregate",
            perUnit: "Per unit",
            labourCost: "Labour Cost",
            perDay: "Per day",
            referenceNotice: "Reference values only. Actual rates vary by location and supplier.",
            recentPredictions: "Recent Predictions",
            previousEstimates: "Your previously generated estimates",
            viewHistory: "View History",
            project: "Project",
            area: "Area",
            estimatedCost: "Estimated Cost",
            status: "Status",
            saved: "Saved",
            noMatchingPredictions: "No matching predictions found.",
            tryAnotherSearch: "Try another project name, area, or estimated cost.",
            noPredictionsYet: "No predictions yet",
            createFirstEstimate: "Create your first construction estimate. Your saved predictions will appear here automatically.",
            createFirstPrediction: "Create First Prediction",
            footerDescription: "Construction Cost Prediction System.",
            footerTagline: "Plan better. Estimate smarter.",
            noSavedPredictions: "No saved predictions to search.",
            matchingPredictions: "matching prediction(s) found",
            estimatedCostChart: "Estimated Cost",
            noChartPredictions: "No predictions yet",
            clearSearch: "Clear search",
            openMenu: "Open menu",
            openProfileMenu: "Open profile menu",
            profilePhoto: "Profile photo",
            user: "BuildAI User",
            language: "Language",
            selectLanguage: "Select Language",
            darkMode: "Dark Mode",
            darkModeOn: "Dark Mode On",
            darkModeOff: "Dark Mode Off",
            materialCost: "Material Cost",
            totalCost: "Total Cost",
            search: "Search",
            edit: "Edit",
            delete: "Delete",
            update: "Update",
            cancel: "Cancel",
            saveChanges: "Save Changes",
            login: "Login",
            register: "Create Account",
            projectName: "Project Name",
            location: "Location",
            floors: "Floors",
            predictCost: "Predict Cost",
            predictedCost: "Predicted Cost",
            email: "Email Address",
            password: "Password",
            confirmPassword: "Confirm Password",
            name: "Full Name",
            submit: "Submit",
            clear: "Clear",
            constructionCostReports: "Construction Cost Reports",
            viewPrintReports: "View and print your saved construction cost predictions.",
            printReport: "Print Report",
            averageEstimatedCostReport: "Average Estimated Cost",
            totalEstimatedCost: "Total Estimated Cost",
            predictionRecords: "Prediction Records",
            savedAccountPredictions: "Only predictions saved to your account are listed here.",
            records: "Records",
            id: "ID",
            predictionDate: "Prediction Date",
            sqft: "Sq.ft",
            noReports: "No prediction reports available yet.",
            generatePredictionFirst: "Generate a prediction first. Once it is saved, it will appear here automatically.",
            createPrediction: "Create Prediction",
            copyright: "© 2026 BuildAI | Construction Cost Prediction System",

            historyTitle: "Prediction History",
            historyDescription: "View and manage your previous construction cost predictions.",
            averageCost: "Average Cost",
            latestPrediction: "Latest Prediction",
            today: "Today",
            noData: "No data available",
            searchProject: "Search Project",
            enterProjectName: "Enter project name...",
            allLocations: "All Locations",
            date: "Date",
            resetFilters: "Reset Filters",
            previousPredictions: "Previous Predictions",
            noPredictionsAvailable: "No predictions available yet.",
            noMatchingHistory: "No matching history found.",
            floorsLabel: "Floors",
            filterByLocation: "Filter by location",
            filterByDate: "Filter by date",
            actions: "Actions",
            view: "View",
            close: "Close",
            back: "Back",
            next: "Next",
            previous: "Previous",
            print: "Print",
            download: "Download",
            profile: "Profile",
            changePassword: "Change Password",
            currentPassword: "Current Password",
            newPassword: "New Password",
            confirmNewPassword: "Confirm New Password",
            save: "Save",
            reset: "Reset",
            apply: "Apply",
            success: "Success",
            error: "Error",
            loading: "Loading...",
            noResults: "No results found."
        },

        mr: {
            dashboard: "डॅशबोर्ड",
            prediction: "खर्चाचा अंदाज",
            history: "इतिहास",
            reports: "अहवाल",
            settings: "सेटिंग्ज",
            logout: "लॉगआउट",
            workspace: "कार्यस्थळ",
            dashboardOverview: "डॅशबोर्डचा आढावा",
            searchPredictions: "अंदाज शोधा...",
            buildaiAccount: "BuildAI खाते",
            myProfile: "माझे प्रोफाइल",
            profileDescription: "नाव, ईमेल आणि प्रोफाइल माहिती",
            accountSettings: "खाते सेटिंग्ज",
            settingsDescription: "पासवर्ड आणि ॲपच्या पसंती",
            myPredictions: "माझे अंदाज",
            predictionsDescription: "तुमचे मागील खर्चाचे अंदाज",
            notifications: "सूचना",
            notificationsDescription: "अंदाज आणि खात्याविषयीच्या सूचना",
            welcomeBack: "पुन्हा स्वागत आहे,",
            workspaceEyebrow: "तुमचे प्रकल्प कार्यस्थळ",
            dashboardIntro: "बांधकाम खर्चाच्या अंदाजांचा मागोवा घ्या आणि पुढील प्रकल्पाचे नियोजन करा.",
            newPrediction: "नवीन अंदाज",
            totalPredictions: "एकूण अंदाज",
            savedEstimates: "तुम्ही जतन केलेले अंदाज",
            todaysPredictions: "आजचे अंदाज",
            estimatesToday: "आज तयार केलेले अंदाज",
            averageEstimatedCost: "सरासरी अंदाजित खर्च",
            averageAcrossEstimates: "सर्व अंदाजांची सरासरी",
            constructionCostAnalysis: "बांधकाम खर्चाचे विश्लेषण",
            recentPredictionCosts: "अलीकडील अंदाजांमधील खर्च",
            materialPriceReference: "बांधकाम साहित्याच्या किमती",
            illustrativeRates: "नियोजनासाठी उदाहरणार्थ दर",
            cement: "सिमेंट",
            perBag: "प्रति पोते",
            steel: "स्टील",
            perKg: "प्रति किलो",
            sand: "वाळू",
            perCft: "प्रति घनफूट",
            bricks: "विटा",
            perPiece: "प्रति नग",
            aggregate: "खडी",
            perUnit: "प्रति युनिट",
            labourCost: "मजुरीचा खर्च",
            perDay: "प्रतिदिन",
            referenceNotice: "हे फक्त संदर्भासाठीचे दर आहेत. प्रत्यक्ष दर ठिकाणानुसार बदलतात.",
            recentPredictions: "अलीकडील अंदाज",
            previousEstimates: "तुम्ही यापूर्वी तयार केलेले अंदाज",
            viewHistory: "इतिहास पहा",
            project: "प्रकल्प",
            area: "क्षेत्रफळ",
            estimatedCost: "अंदाजित खर्च",
            status: "स्थिती",
            saved: "जतन केले",
            noMatchingPredictions: "जुळणारे अंदाज सापडले नाहीत.",
            tryAnotherSearch: "दुसरे प्रकल्पाचे नाव, क्षेत्रफळ किंवा खर्च शोधा.",
            noPredictionsYet: "अजून कोणतेही अंदाज नाहीत",
            createFirstEstimate: "तुमचा पहिला बांधकाम खर्चाचा अंदाज तयार करा. जतन केलेले अंदाज येथे दिसतील.",
            createFirstPrediction: "पहिला अंदाज तयार करा",
            footerDescription: "बांधकाम खर्चाचा अंदाज प्रणाली.",
            footerTagline: "चांगले नियोजन करा. अधिक अचूक अंदाज घ्या.",
            noSavedPredictions: "शोधण्यासाठी जतन केलेले अंदाज नाहीत.",
            matchingPredictions: "जुळणारे अंदाज सापडले",
            estimatedCostChart: "अंदाजित खर्च",
            noChartPredictions: "अजून अंदाज नाहीत",
            clearSearch: "शोध पुसून टाका",
            openMenu: "मेनू उघडा",
            openProfileMenu: "प्रोफाइल मेनू उघडा",
            profilePhoto: "प्रोफाइल फोटो",
            user: "BuildAI वापरकर्ता",
            language: "भाषा",
            selectLanguage: "भाषा निवडा",
            darkMode: "डार्क मोड",
            darkModeOn: "डार्क मोड सुरू",
            darkModeOff: "डार्क मोड बंद",
            materialCost: "साहित्याचा खर्च",
            totalCost: "एकूण खर्च",
            search: "शोधा",
            edit: "संपादित करा",
            delete: "हटवा",
            update: "अपडेट करा",
            cancel: "रद्द करा",
            saveChanges: "बदल जतन करा",
            login: "लॉगिन",
            register: "खाते तयार करा",
            projectName: "प्रकल्पाचे नाव",
            location: "ठिकाण",
            floors: "मजल्यांची संख्या",
            predictCost: "खर्चाचा अंदाज काढा",
            predictedCost: "अंदाजित खर्च",
            email: "ईमेल पत्ता",
            password: "पासवर्ड",
            confirmPassword: "पासवर्डची पुष्टी करा",
            name: "पूर्ण नाव",
            submit: "सबमिट करा",
            clear: "पुसून टाका",
            constructionCostReports: "बांधकाम खर्चाचे अहवाल",
            viewPrintReports: "तुमचे जतन केलेले बांधकाम खर्चाचे अंदाज पहा आणि प्रिंट करा.",
            printReport: "अहवाल प्रिंट करा",
            averageEstimatedCostReport: "सरासरी अंदाजित खर्च",
            totalEstimatedCost: "एकूण अंदाजित खर्च",
            predictionRecords: "अंदाजाच्या नोंदी",
            savedAccountPredictions: "तुमच्या खात्यात जतन केलेले अंदाज येथे दिसतात.",
            records: "नोंदी",
            id: "क्रमांक",
            predictionDate: "अंदाजाची तारीख",
            sqft: "चौ. फूट",
            noReports: "अजून कोणतेही अहवाल उपलब्ध नाहीत.",
            generatePredictionFirst: "प्रथम खर्चाचा अंदाज तयार करा. जतन केल्यानंतर तो येथे दिसेल.",
            createPrediction: "अंदाज तयार करा",
            copyright: "© 2026 BuildAI | बांधकाम खर्च अंदाज प्रणाली",

            historyTitle: "अंदाजांचा इतिहास",
            historyDescription: "तुमचे मागील बांधकाम खर्चाचे अंदाज पहा आणि व्यवस्थापित करा.",
            averageCost: "सरासरी खर्च",
            latestPrediction: "नवीनतम अंदाज",
            today: "आज",
            noData: "माहिती उपलब्ध नाही",
            searchProject: "प्रकल्प शोधा",
            enterProjectName: "प्रकल्पाचे नाव टाका...",
            allLocations: "सर्व ठिकाणे",
            date: "तारीख",
            resetFilters: "फिल्टर रीसेट करा",
            previousPredictions: "मागील अंदाज",
            noPredictionsAvailable: "अजून कोणतेही अंदाज उपलब्ध नाहीत.",
            noMatchingHistory: "जुळणारा इतिहास सापडला नाही.",
            floorsLabel: "मजले",
            filterByLocation: "ठिकाणानुसार फिल्टर करा",
            filterByDate: "तारखेनुसार फिल्टर करा",
            actions: "कृती",
            view: "पहा",
            close: "बंद करा",
            back: "मागे",
            next: "पुढे",
            previous: "मागील",
            print: "प्रिंट करा",
            download: "डाउनलोड",
            profile: "प्रोफाइल",
            changePassword: "पासवर्ड बदला",
            currentPassword: "सध्याचा पासवर्ड",
            newPassword: "नवीन पासवर्ड",
            confirmNewPassword: "नवीन पासवर्डची पुष्टी करा",
            save: "जतन करा",
            reset: "रीसेट करा",
            apply: "लागू करा",
            success: "यशस्वी",
            error: "त्रुटी",
            loading: "लोड होत आहे...",
            noResults: "निकाल सापडले नाहीत."
        },

        hi: {
            dashboard: "डैशबोर्ड",
            prediction: "लागत अनुमान",
            history: "इतिहास",
            reports: "रिपोर्ट",
            settings: "सेटिंग्स",
            logout: "लॉगआउट",
            workspace: "कार्यस्थल",
            dashboardOverview: "डैशबोर्ड का अवलोकन",
            searchPredictions: "अनुमान खोजें...",
            buildaiAccount: "BuildAI खाता",
            myProfile: "मेरी प्रोफ़ाइल",
            profileDescription: "नाम, ईमेल और प्रोफ़ाइल की जानकारी",
            accountSettings: "खाता सेटिंग्स",
            settingsDescription: "पासवर्ड और ऐप की प्राथमिकताएँ",
            myPredictions: "मेरे अनुमान",
            predictionsDescription: "आपके पिछले लागत अनुमान",
            notifications: "सूचनाएँ",
            notificationsDescription: "अनुमान और खाते से जुड़े अपडेट",
            welcomeBack: "वापसी पर स्वागत है,",
            workspaceEyebrow: "आपका प्रोजेक्ट कार्यस्थल",
            dashboardIntro: "अपने निर्माण लागत अनुमानों को देखें और अगले प्रोजेक्ट की योजना बनाएँ।",
            newPrediction: "नया अनुमान",
            totalPredictions: "कुल अनुमान",
            savedEstimates: "आपके सहेजे गए अनुमान",
            todaysPredictions: "आज के अनुमान",
            estimatesToday: "आज बनाए गए अनुमान",
            averageEstimatedCost: "औसत अनुमानित लागत",
            averageAcrossEstimates: "आपके सभी अनुमानों का औसत",
            constructionCostAnalysis: "निर्माण लागत विश्लेषण",
            recentPredictionCosts: "हाल के अनुमानों की लागत",
            materialPriceReference: "निर्माण सामग्री की कीमतें",
            illustrativeRates: "योजना के लिए उदाहरण दरें",
            cement: "सीमेंट",
            perBag: "प्रति बोरी",
            steel: "स्टील",
            perKg: "प्रति किलो",
            sand: "रेत",
            perCft: "प्रति घन फुट",
            bricks: "ईंटें",
            perPiece: "प्रति नग",
            aggregate: "गिट्टी",
            perUnit: "प्रति यूनिट",
            labourCost: "मजदूरी लागत",
            perDay: "प्रति दिन",
            referenceNotice: "ये केवल संदर्भ दरें हैं। वास्तविक दरें स्थान के अनुसार बदलती हैं।",
            recentPredictions: "हाल के अनुमान",
            previousEstimates: "आपके पहले बनाए गए अनुमान",
            viewHistory: "इतिहास देखें",
            project: "प्रोजेक्ट",
            area: "क्षेत्रफल",
            estimatedCost: "अनुमानित लागत",
            status: "स्थिति",
            saved: "सहेजा गया",
            noMatchingPredictions: "कोई मेल खाता अनुमान नहीं मिला।",
            tryAnotherSearch: "दूसरा प्रोजेक्ट नाम, क्षेत्रफल या लागत खोजें।",
            noPredictionsYet: "अभी कोई अनुमान नहीं है",
            createFirstEstimate: "अपना पहला निर्माण लागत अनुमान बनाएँ। सहेजे गए अनुमान यहाँ दिखाई देंगे।",
            createFirstPrediction: "पहला अनुमान बनाएँ",
            footerDescription: "निर्माण लागत अनुमान प्रणाली।",
            footerTagline: "बेहतर योजना बनाएँ। बेहतर अनुमान लगाएँ।",
            noSavedPredictions: "खोजने के लिए कोई सहेजे गए अनुमान नहीं हैं।",
            matchingPredictions: "मेल खाते अनुमान मिले",
            estimatedCostChart: "अनुमानित लागत",
            noChartPredictions: "अभी कोई अनुमान नहीं है",
            clearSearch: "खोज साफ़ करें",
            openMenu: "मेनू खोलें",
            openProfileMenu: "प्रोफ़ाइल मेनू खोलें",
            profilePhoto: "प्रोफ़ाइल फोटो",
            user: "BuildAI उपयोगकर्ता",
            language: "भाषा",
            selectLanguage: "भाषा चुनें",
            darkMode: "डार्क मोड",
            darkModeOn: "डार्क मोड चालू",
            darkModeOff: "डार्क मोड बंद",
            materialCost: "सामग्री की लागत",
            totalCost: "कुल लागत",
            search: "खोजें",
            edit: "संपादित करें",
            delete: "हटाएँ",
            update: "अपडेट करें",
            cancel: "रद्द करें",
            saveChanges: "बदलाव सहेजें",
            login: "लॉगिन",
            register: "खाता बनाएँ",
            projectName: "प्रोजेक्ट का नाम",
            location: "स्थान",
            floors: "मंजिलों की संख्या",
            predictCost: "लागत का अनुमान लगाएँ",
            predictedCost: "अनुमानित लागत",
            email: "ईमेल पता",
            password: "पासवर्ड",
            confirmPassword: "पासवर्ड की पुष्टि करें",
            name: "पूरा नाम",
            submit: "जमा करें",
            clear: "साफ़ करें",
            constructionCostReports: "निर्माण लागत रिपोर्ट",
            viewPrintReports: "अपने सहेजे गए निर्माण लागत अनुमान देखें और प्रिंट करें।",
            printReport: "रिपोर्ट प्रिंट करें",
            averageEstimatedCostReport: "औसत अनुमानित लागत",
            totalEstimatedCost: "कुल अनुमानित लागत",
            predictionRecords: "अनुमान रिकॉर्ड",
            savedAccountPredictions: "आपके खाते में सहेजे गए अनुमान यहाँ दिखाए जाते हैं।",
            records: "रिकॉर्ड",
            id: "आईडी",
            predictionDate: "अनुमान की तारीख",
            sqft: "वर्ग फुट",
            noReports: "अभी कोई अनुमान रिपोर्ट उपलब्ध नहीं है।",
            generatePredictionFirst: "पहले अनुमान बनाएँ। सहेजने के बाद वह यहाँ दिखाई देगा।",
            createPrediction: "अनुमान बनाएँ",
            copyright: "© 2026 BuildAI | निर्माण लागत अनुमान प्रणाली",

            historyTitle: "अनुमानों का इतिहास",
            historyDescription: "अपने पिछले निर्माण लागत अनुमान देखें और प्रबंधित करें।",
            averageCost: "औसत लागत",
            latestPrediction: "नवीनतम अनुमान",
            today: "आज",
            noData: "कोई जानकारी उपलब्ध नहीं",
            searchProject: "प्रोजेक्ट खोजें",
            enterProjectName: "प्रोजेक्ट का नाम दर्ज करें...",
            allLocations: "सभी स्थान",
            date: "तारीख",
            resetFilters: "फ़िल्टर रीसेट करें",
            previousPredictions: "पिछले अनुमान",
            noPredictionsAvailable: "अभी कोई अनुमान उपलब्ध नहीं है।",
            noMatchingHistory: "कोई मिलता-जुलता इतिहास नहीं मिला।",
            floorsLabel: "मंजिलें",
            filterByLocation: "स्थान के अनुसार फ़िल्टर करें",
            filterByDate: "तारीख के अनुसार फ़िल्टर करें",
            actions: "कार्रवाई",
            view: "देखें",
            close: "बंद करें",
            back: "वापस",
            next: "अगला",
            previous: "पिछला",
            print: "प्रिंट करें",
            download: "डाउनलोड",
            profile: "प्रोफ़ाइल",
            changePassword: "पासवर्ड बदलें",
            currentPassword: "वर्तमान पासवर्ड",
            newPassword: "नया पासवर्ड",
            confirmNewPassword: "नए पासवर्ड की पुष्टि करें",
            save: "सहेजें",
            reset: "रीसेट करें",
            apply: "लागू करें",
            success: "सफल",
            error: "त्रुटि",
            loading: "लोड हो रहा है...",
            noResults: "कोई परिणाम नहीं मिला।"
        }
    };

    function safeGet(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? fallback : value;
        } catch (error) {
            return fallback;
        }
    }

    function safeSet(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn("BuildAI: Could not save preference.");
        }
    }

    function getLanguage() {
        const saved = safeGet(LANGUAGE_KEY, DEFAULT_LANGUAGE);
        return translations[saved] ? saved : DEFAULT_LANGUAGE;
    }

    function translatePage(language) {
        const lang = translations[language] ? language : DEFAULT_LANGUAGE;
        const words = translations[lang];

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n");

            if (!Object.prototype.hasOwnProperty.call(words, key)) {
                return;
            }

            // Inputs should use data-i18n-placeholder or data-i18n-value.
            if (
                element.tagName === "INPUT" ||
                element.tagName === "TEXTAREA"
            ) {
                return;
            }

            // Keep icons and other child elements intact.
            const textNode = Array.from(element.childNodes).find(function (node) {
                return node.nodeType === Node.TEXT_NODE &&
                    node.textContent.trim() !== "";
            });

            if (textNode) {
                textNode.textContent = words[key];
            } else if (element.children.length === 0) {
                element.textContent = words[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-placeholder");

            if (Object.prototype.hasOwnProperty.call(words, key)) {
                element.setAttribute("placeholder", words[key]);
            }
        });

        document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-title");

            if (Object.prototype.hasOwnProperty.call(words, key)) {
                element.setAttribute("title", words[key]);
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-aria-label");

            if (Object.prototype.hasOwnProperty.call(words, key)) {
                element.setAttribute("aria-label", words[key]);
            }
        });

        document.querySelectorAll("[data-i18n-value]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-value");

            if (Object.prototype.hasOwnProperty.call(words, key)) {
                element.value = words[key];
            }
        });

        document.querySelectorAll("[data-language-select]").forEach(function (select) {
            select.value = lang;
        });

        document.querySelectorAll("[data-theme-label]").forEach(function (label) {
            label.textContent = isDarkModeEnabled()
                ? words.darkModeOn
                : words.darkModeOff;
        });

        safeSet(LANGUAGE_KEY, lang);

        document.dispatchEvent(new CustomEvent("buildai:languageChanged", {
            detail: {
                language: lang,
                translations: words
            }
        }));
    }

    function isDarkModeEnabled() {
        return safeGet(THEME_KEY, "false") === "true";
    }

    function applyTheme(enabled) {
        const isDark = Boolean(enabled);

        document.documentElement.classList.toggle("dark-mode", isDark);

        if (document.body) {
            document.body.classList.toggle("dark-mode", isDark);
        }

        document.querySelectorAll("#darkModeToggle, [data-dark-mode-toggle]").forEach(function (toggle) {
            toggle.checked = isDark;
        });

        document.querySelectorAll("[data-theme-label]").forEach(function (label) {
            const words = translations[getLanguage()];
            label.textContent = isDark ? words.darkModeOn : words.darkModeOff;
        });
    }

    function setDarkMode(enabled) {
        const isDark = Boolean(enabled);
        safeSet(THEME_KEY, String(isDark));
        applyTheme(isDark);
    }

    function initializeTheme() {
        applyTheme(isDarkModeEnabled());

        document.querySelectorAll("#darkModeToggle, [data-dark-mode-toggle]").forEach(function (toggle) {
            if (toggle.dataset.themeHandlerAttached === "true") {
                return;
            }

            toggle.checked = isDarkModeEnabled();

            toggle.addEventListener("change", function () {
                setDarkMode(toggle.checked);
            });

            toggle.dataset.themeHandlerAttached = "true";
        });
    }

    function initializeLanguage() {
        document.querySelectorAll("[data-language-select]").forEach(function (select) {
            if (select.dataset.languageHandlerAttached === "true") {
                return;
            }

            select.addEventListener("change", function () {
                translatePage(select.value);
            });

            select.dataset.languageHandlerAttached = "true";
        });

        document.querySelectorAll("[data-language-option]").forEach(function (option) {
            if (option.dataset.languageHandlerAttached === "true") {
                return;
            }

            option.addEventListener("click", function () {
                translatePage(option.getAttribute("data-language-option"));
            });

            option.dataset.languageHandlerAttached = "true";
        });

        translatePage(getLanguage());
    }

    function initialize() {
        initializeLanguage();
        initializeTheme();
    }

    window.BuildAILanguage = {
        setLanguage: translatePage,
        getLanguage: getLanguage,
        translations: translations
    };

    window.BuildAITheme = {
        apply: applyTheme,
        set: setDarkMode,
        isDark: isDarkModeEnabled
    };

    window.addEventListener("storage", function (event) {
        if (event.key === THEME_KEY) {
            applyTheme(event.newValue === "true");
        }

        if (event.key === LANGUAGE_KEY) {
            translatePage(event.newValue || DEFAULT_LANGUAGE);
        }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize);
    } else {
        initialize();
    }
})();
