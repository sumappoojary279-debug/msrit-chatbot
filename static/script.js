document.addEventListener("DOMContentLoaded", function () {

    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const typing = document.getElementById("typing-indicator");

    function addUserMessage(text) {
        const div = document.createElement("div");
        div.className = "user-message";
        div.textContent = text;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addBotMessage(text) {
        const div = document.createElement("div");
        div.className = "bot-message";
        div.innerHTML = text.replace(/\n/g, "<br>");
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showTyping() {
        typing.style.display = "block";
    }

    function hideTyping() {
        typing.style.display = "none";
    }

    function botReply(text) {
        showTyping();
        text = text.toLowerCase();

        setTimeout(() => {
            hideTyping();
            let reply = "";

            if (
                text === "hi" || text === "hello" || text === "hey" ||
                text === "hii" || text === "good morning" ||
                text === "good afternoon" || text === "good evening"
            ) {
                reply =
                    "👋 Hello! Welcome to **MSRIT Virtual Assistant** 😊\n" +
                    "How can I help you today?";
            }

            else if (text.includes("admission")) {
                reply =
                    "🎓 **Admissions at MSRIT**\n\n" +
                    "• KCET – Government quota\n" +
                    "• COMEDK – All India quota\n" +
                    "• Management & NRI quota";
            }
            else if (text.includes("eligibility")) {
                reply =
                    "✅ **Eligibility**\n\n" +
                    "• 10+2 with Physics & Mathematics\n" +
                    "• Valid KCET / COMEDK rank";
            }
            else if (text.includes("placement")) {
                reply =
                    "💼 **Placements**\n\n" +
                    "Placement Highlights:\n"+

"• High placement percentage\n"+
"• Average package: Competitive\n"+
"• Top recruiters across domains\n"+
"• Core & IT company exposure\n"+

                    "Top Recruiters\n\n"+
                      "• Google\n"+
                     "• Amazon\n"+
                     "• Infosys\n"+
                     "• Microsoft\n"+
                     "• TCS , Wipro, Accenture , Schnieder electric, Castle,\n"+
                     "• Natwest,  JPMorgan chase & co, Samsung Semiconductors,\n"+
                    "• Myntra, oracle, Sobha constructions,  Tvs motors,\n" +
                    "•Capgemini, IBM,\n" +
                    "•Bosch, Siemens, L&T etc\n";
            }
            else if (text.includes("scholarship")) {
                reply =
                    "🎓 **Scholarships**\n\n" +
                    " • Post metric scholarship to SC/STs\n"+
                    " • Fee concession to Category-I.II and III\n"+
                    " • National scholarship , Merit-based,\n" +
                    " • MSRIT Alumni Scholarship\n"+
                    " • SC/ST/OBC & Minority scholarships";
            }
            else if (text.includes("facilities") || text.includes("campus")) {
                reply =
                    "🏫 **Facilities**\n\n" +
                    "Library, Labs, Gym,\n" +
                    " • Advanced Computing Labs\n"+
                    "• Sports grounds\n"+
                     "• AI & ML Lab\n"+
                    "• Cloud Computing Lab\n"+
                    "•Sports, Hostels, Wi-Fi campus";
            }
            else if (text.includes("hostels") || text.includes("hostel")) {
                reply =
                    "🏫 **There are so many hostels around the Rammaiah campus**\n\n" +
                    "•Triveni ladies hostel\n" +
                    "•NIMS girls living\n"+
                    "•North point I and II\n"+
                     "•white lotus ladies hostel\n"+
                    "• MSR boys home\n"+
                    "• MSR freshers block etc";
            }
            else if (text.includes("fee structure") || text.includes("fees")) {
                reply =
                    "🏫 **Fee structure at MSRIT**\n\n" +
                    " •Fee varies for all quota: KCET, COMEDK AND MANAGEMENT QUOTA\n" +
                    " •Reservation also plays a role\n";
            }

            else if (text.includes("document")) {
                reply =
                    "🧾 **Documents Required**\n\n" +
                    "•10th & 12th marks cards\n" +
                    "•KCET / COMEDK rank card\n" +
                    "•TC & Study Certificate\n"+ 
                    "• Caste certificate if admission under reservation\n"
            }
            else if (text.includes("contact")) {
                reply =
                    "📞 **Contact MSRIT**\n\n" +
                    " • OFFICE : +91-80-23600822/23606939\n"+
                    "• ADMISSION : +91-80-23607902\n"+ 
                     " •PRINCIPAL : +91-80-23600822\n"
                    
                    "MSR Nagar, Bengaluru – 560054\n" +
                    "🌐 www.msrit.edu";
            }
            else if (text.includes("Clubs at msrit") || text.includes("clubs")) {
                reply =
                    " ** CLUBS AT MSRIT **\n\n" +
                    " • Cultural and technical clubs \n"+
                    "• MAD ADS \n"+ 
                     "• CHIRA RANGA\n"+
                     "• ECELL\n"+
                     "• INARA\n"+
                     "• STUDIO RIT\n"+
                     "• IEE\n"+
                     "• CODEFIX\n"+
                     "• NSS\n"+
                     "• RIT MUSIC\n"+
                     "• PRAYAAG\n"+
                     "• DECA MSRIT\n"+
                     "• RIT DEBSOC\n"+
                     "• CODE RIT\n"+
                    
                      " and many more clubs\n"
            }

                else if (
    text.includes("research") ||
    text.includes("phd") ||
    text.includes("doctoral")
) {
    reply =
        "🔬 **Research Programs at MSRIT**\n\n" +
        "• Ph.D (Doctoral Programs)\n" +
        "• Research in Engineering & Technology\n" +
        "• Research in Sciences\n" +
        "• Interdisciplinary Research\n" +
        "• Innovation & Sponsored Projects\n";
}
else if (
    text.includes("timing") ||
    text.includes("college timing") ||
    text.includes("working hours") ||
    text.includes("office hours")
) {
    reply =
        "⏰ **College Timings at MSRIT**\n\n" +
        "• College Working Hours: 9:00 AM – 4:30 PM\n" +
        "• Office Timings: 9:00 AM – 5:00 PM\n" +
        "• Library Timings: 8:00 AM – 9:00 PM\n" +
        "• Saturday: Working (as per schedule)\n" +
        "• Sunday: Holiday\n";
}

          else if( 
            text .includes("startup")
          ) {  
            reply=

           "**Startup & Innovation Support at MSRIT**\n\n"+

               "• Startup incubation support\n"+
              "• Funding assistance for innovative ideas\n"+
              "• Mentorship from industry experts\n"+
                "• Access to labs & infrastructure\n"+
                  "• Institutional support for student startups\n" 
          }



            else if (text.includes("course") || text.includes("programs")|| text.includes(" programs") ) {
                reply =
                    "**Academic programs at MSRIT**\n\n" +
                    "• Undergraduate Programs (UG)\n" +
                    "• Post graduate programs (PG)\n" +
                    "• Doctoral Programs (phD)\n"+
                    "• Research & innovation\n";
            }
                 else if (text.includes("ug") || text.includes("undergraduate") || text.includes(" ug")|| text.includes("ug ")  ){
                reply =
                    "**UG PROGRAMS OFFERED AT MSRIT**\n\n" +
                    "• Bachelor of Engineering (B.E)\n" +
                    "• Bachelor of Architecture (B.Arc)\n" +
                    "• Science Programs\n" +
                    "• integrated programs \n";
            }
                 else if (text.includes("branches") || text.includes("engineering ")|| text.includes("engineering") || text.includes(" engineering") ){
                reply =
                    "**ENGINEERING COURSES AT MSRIT **\n\n" +
                      " • Computer Science & Engineering (CSE)\n"+
                      " • Artificial Intelligence & ML (AI & ML)\n"+
                      " • Data Science (DS)\n"+
                      " • Information Science & Engineering (ISE)\n"+
                      " • Electronics & Communication (ECE)\n"+
                      " • Electrical & Electronics (EEE)\n"+
                      " • Mechanical Engineering\n"+
                      " • Civil Engineering\n"+
                      " • Electronics & Instrumentation (EIE)\n"+
                      " • Aerospace Engineering\n"+
                      " • Biotechnology\n";
            }
            
            
            else if (
    text === "pg" ||
    text === "pg programs" ||
    text.includes("postgraduate")
) {
    reply =
      "**PG PROGRAMS OFFERED AT MSRIT**\n\n" +
      "• Master of Engineering (M.E)\n" +
      "• Master of Business Administration (MBA)\n" +
      "• Master of Computer Applications (MCA)\n";
}
else if (
    text.includes("process") ||
    text.includes("how to apply") ||
    text.includes("admission procedure")
) {
    reply =
        "📝 **Admission Process at MSRIT**\n\n" +
        "1️⃣ Appear for entrance exam (KCET / COMEDK)\n" +
        "2️⃣ Participate in counseling process\n" +
        "3️⃣ Choose MSRIT during seat allotment\n" +
        "4️⃣ Verify documents at the institute\n" +
        "5️⃣ Pay fees and confirm admission\n" +
        "6️⃣ Report to college for commencement of classes\n";
}
            
            
            
            

                


            

            

            
            
            else {
                reply =
                    "😕 Sorry, I didn’t understand your question\n" ;
                    
            }

            addBotMessage(reply);
        }, 900);
    }

    function sendMessage() {
        const text = userInput.value.trim();
        if (text === "") return;
        addUserMessage(text);
        userInput.value = "";
        botReply(text);
    }

    sendBtn.addEventListener("click", sendMessage);

    userInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") sendMessage();
    });

    window.sendQuickMessage = function (text) {
        addUserMessage(text);
        botReply(text);
    };

    addBotMessage(
        "👋 Welcome to **MSRIT Virtual Assistant** 🤖\n" +
        "Ask me about admissions, academics, placements or campus life."
    );

    // =========================
    // CHATBOT TOGGLE LOGIC
    // =========================
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotBox = document.getElementById("chatbot-box");

    chatbotToggle.addEventListener("click", function () {
        chatbotBox.classList.toggle("hidden");
    });

const chatbotClose = document.getElementById("chatbot-close");
chatbotClose.addEventListener("click", function () {
    chatbotBox.classList.add("hidden");
});




});
