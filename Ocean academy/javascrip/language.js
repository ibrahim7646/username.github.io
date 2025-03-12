document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("language-switch");
    
    if (languageButton) {
        languageButton.addEventListener("click", function () {
            const currentLang = localStorage.getItem("lang") || "en";
            const newLang = currentLang === "en" ? "ar" : "en";
            
            loadLanguage(newLang);
            localStorage.setItem("lang", newLang); // Save language preference
            updateImage(); // Call this function to update the description immediately
        
        });
    }

    // Load the last selected language or default to English
    const savedLanguage = localStorage.getItem("lang") || "en";
    loadLanguage(savedLanguage);
});

function loadLanguage(lang) {
    console.log(`Loading language: ${lang}`); // Debugging log

    fetch(`json/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            console.log('Language data loaded:', data);

            // Update all text elements
            updateTextContent("home", data.home);
            updateTextContent("services", data.services);
            updateTextContent("prices", data.prices);
            updateTextContent("about_us", data.about_us);
            updateTextContent("location", data.location);
            updateTextContent("price_list", data.price_list);
            updateTextContent("swim_service", data.swim_service);
            updateTextContent("footer_text", data.footer_text);
            updateTextContent("gym_service", data.gym_service);
            updateTextContent("price_list", data.price_list);
            updateTextContent("private_session", data.private_session);
            updateTextContent("group_session", data.group_session);
            updateTextContent("gym_price", data.gym_price);
            updateTextContent("karate", data.karate);
            updateTextContent("category", data.category);
            updateTextContent("description", data.description);
                            updateTextContent("welcome", data.welcome);
                            updateTextContent("opening_hours", data.opening_hours);
                            updateTextContent("opening_hours_info", data.opening_hours_info);
                            updateTextContent("fitness_classes", data.fitness_classes);
                            updateTextContent("fitness_classes_info", data.fitness_classes_info);
                            updateTextContent("day", data.day);
                            updateTextContent("class", data.class);
                            updateTextContent("time", data.time);
                            updateTextContent("monday", data.monday);
                            updateTextContent("tuesday", data.tuesday);
                            updateTextContent("wednesday", data.wednesday);
                            updateTextContent("thursday", data.thursday);
                            updateTextContent("friday", data.friday);
                            updateTextContent("facilities", data.facilities);
                            updateTextContent("facilities_info", data.facilities_info);
                            updateTextContent("nextButton", data.next_image); 
                            updateTextContent("about-title", data["about-title"]);
                            updateTextContent("about-description", data["about-description"]);
                            updateTextContent("mission-title", data["mission-title"]);
                            updateTextContent("mission-description", data["mission-description"]);
                            updateTextContent("vision-title", data["vision-title"]);
                            updateTextContent("vision-description", data["vision-description"]);
                            updateTextContent("values-title", data["values-title"]);
                            updateTextContent("inclusivity", data.values.inclusivity);
                            updateTextContent("empowerment", data.values.empowerment);
                            updateTextContent("community", data.values.community);
                            updateTextContent("excellence", data.values.excellence);
                            updateTextContent("safety", data.values.safety);
                            updateTextContent("join-title", data["join-title"]);
                            updateTextContent("join-description", data["join-description"]); 
                            updateTextContent("cardio", data.class_names.cardio);
                            updateTextContent("power", data.class_names.power);
                            updateTextContent("steps", data.class_names.steps);
                            updateTextContent("shaping", data.class_names.shaping);
                            updateTextContent("zumba", data.class_names.zumba);
                            updateTextContent("price_list", data.price_list);
                            updateTextContent("exchange_rate_label", data.exchange_rate_label);
                            updateTextContent("private_session", data.private_session);
                            updateTextContent("private_session_1", data.price_descriptions.private_session_1);
                            updateTextContent("private_session_4", data.price_descriptions.private_session_4);
                            updateTextContent("private_session_8", data.price_descriptions.private_session_8);
                            updateTextContent("private_session_2_persons", data.price_descriptions.private_session_2_persons);
                            updateTextContent("group_session", data.group_session);
                            updateTextContent("group_session_4", data.price_descriptions.group_session_4);
                            updateTextContent("group_session_8", data.price_descriptions.group_session_8);
                            updateTextContent("group_session_12", data.price_descriptions.group_session_12);
                            updateTextContent("gym_price", data.gym_price);
                            updateTextContent("gym_price_1_month", data.price_descriptions.gym_price_1_month);
                            updateTextContent("gym_price_10_visit", data.price_descriptions.gym_price_10_visit);
                            updateTextContent("gym_price_pt_session", data.price_descriptions.gym_price_pt_session);
                            updateTextContent("karate", data.karate);
                            updateTextContent("karate_1_month", data.price_descriptions.karate_1_month);
                            updateTextContent("home", data.home);
                            updateTextContent("services", data.services);
                            updateTextContent("prices", data.prices);
                            updateTextContent("about_us", data.about_us);
                            updateTextContent("location", data.location);
                            updateTextContent("welcome", data.welcome);
                            updateTextContent("description", data.description);
                            updateTextContent("join_button", data.join_button);
                            updateTextContent("featured_programs", data.featured_programs);
                            updateTextContent("swimming_lessons", data.swimming_lessons);
                            updateTextContent("fitness_classes", data.fitness_classes);
                            updateTextContent("karate_classes", data.karate_classes);
                            updateTextContent("testimonial_1", data.testimonial_1);
                            updateTextContent("testimonial_2", data.testimonial_2);
                            updateTextContent("call_to_action", data.call_to_action);
                            updateTextContent("sign_up", data.sign_up);
                            updateTextContent("popup_message", data.popup_message);
                            updateTextContent("footer_text", data.footer_text);
                            updateTextContent("testimonials_title", data.testimonials_title);
                            updateTextContent("testimonial_1", data.testimonial_1);
                            updateTextContent("hidden_feedback_1", data.hidden_feedback_1);
                            updateTextContent("testimonial_2", data.testimonial_2);
                            updateTextContent("hidden_feedback_2", data.hidden_feedback_2);
                            updateTextContent("testimonial_3", data.testimonial_3);
                            updateTextContent("hidden_feedback_3", data.hidden_feedback_3);
                            updateTextContent("testimonial_4", data.testimonial_4);
                            updateTextContent("hidden_feedback_4", data.hidden_feedback_4);
                            updateTextContent("testimonial_5", data.testimonial_5);
                            updateTextContent("hidden_feedback_5", data.hidden_feedback_5);
                        
                            updateTextContent("swimming_lessons_description",data.swimming_lessons_description);
                           
                            updateTextContent("fitness_classes_description",data.fitness_classes_description,) ;
                            
                            updateTextContent("karate_classes_description", data.karate_classes_description);
                            updateTextContent(  "call_to_action_description", data.call_to_action_description);
                            updateTextContent("sign_up_button", data.sign_up_button);
                            updateTextContent("welcome_message", data.welcome_message);
                            updateTextContent("popup_title", data.popup_title);
                            updateTextContent("location_popup_title", data.location_popup_title);
                            updateTextContent("location_popup_message", data.location_popup_message);
                            updateTextContent("location1", data.location1);
                            updateTextContent("location2", data.location2);
                            updateTextContent("go", data.go);
                            
                          
                      
                            
                            
                    })
                    .catch(error => console.error('Error loading language:', error));
            }
            
      

// Helper function to safely update text content
function updateTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    } else {
        console.warn(`Element with ID '${id}' not found.`);
    }
}
// Function to show the location selection popup
function showLocationPopup() {
    document.getElementById("location-popup").style.display = "block";
}

// Function to close the location selection popup
function closeLocationPopup() {
    document.getElementById("location-popup").style.display = "none";
}

// Function to handle the location selection
function goToSelectedLocation() {
    var selectedLocation = document.getElementById("location-select").value;
    // Redirect or perform an action based on the selected location
    switch (selectedLocation) {
        case "Bir Hassan":
            window.open("https://maps.app.goo.gl/c6LoS9Q9ZL2Uag7r6", "_blank");
            break;
        case "Hamra":
            window.open("https://maps.app.goo.gl/Wyhe4TmaMuc3SSQo9?g_st=ic", "_blank");
            break;
      
        default:
            alert("Please select a location.");
    }
    closeLocationPopup(); // Close the popup after selection
}
