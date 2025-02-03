// lib/pageHelper.js
import Stack from "../contentstack-sdk";
import { addEditableTags } from "@contentstack/utils";

const liveEdit = process.env.CONTENTSTACK_LIVE_EDIT_TAGS === "true";

// // Fetch Header Data
// export const getHeaderRes = async () => {
//     const response = await Stack.getEntry({
//         contentTypeUid: "header",
//         referenceFieldPath: ["navigation_links.page_reference"],
//         jsonRtePath: ["notification_bar.announcement_text"],
//     });

//     if (liveEdit) {
//         addEditableTags(response[0][0], "p_header", true);
//     }
//     return response[0][0];
// };








export const getAllEntries = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "page",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    liveEdit &&
        response[0].forEach((entry) => addEditableTags(entry, "page", true));
    return response[0];
};

// const fetchHeaderAndEntries = async () => {
//     try {
//       // Fetch header data without reference path to debug
//       const response = await Stack.getEntry({
//         contentTypeUid: "header",
//       });
  
//       // Log the response with JSON.stringify to see the full object
//       console.log('Header Response:', JSON.stringify(response, null, 2));
  
//       const headerRes = response[0][0];  // Adjust this based on your response structure
//       const entriesRes = await getAllEntries(); // Fetch all entries if needed
  
//       setHeaderProp(headerRes);
//       setEntries(entriesRes);
//     } catch (error) {
//       // Log the error with JSON.stringify to see the full error object
//       console.error('Error fetching header data:', JSON.stringify(error, null, 2));
//     }
//   };
  
  

// Fetch Home Page Data
// export const getHomePageRes = async () => {
//     const response = await Stack.getEntryByUrl({
//         contentTypeUid: "page",
//         entryUrl: "/",
//         referenceFieldPath: undefined,
//         jsonRtePath: [
//             "page_components.section_with_buckets.buckets.description",
//             "page_components.from_blog.featured_blogs.body",
//         ],
//     });

//     if (liveEdit) {
//         addEditableTags(response[0], "page", true);
//     }
//     return response[0];
// };

// Fetch Header Data
export const getHeaderRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "header",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });

    if (liveEdit) {
        addEditableTags(response[0][0], "header", true);
    }
    return response[0][0];
};


//Fetch Home Page Data
export const getHomePageRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: 'home',
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    console.log('Fetched Response:', response);

    if (liveEdit) {
        addEditableTags(response[0], 'home', true);
    }

    return response[0];
};

//Fetch Guide data
export const getGuidePageRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: 'guide',
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    console.log('Fetched Response:', response);

    if (liveEdit) {
        addEditableTags(response[0], 'guide', true);
    }

    return response[0];
};

//Fetch Guide data
export const getAboutUsRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: 'about_us',
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    console.log('Fetched Response:', response);

    if (liveEdit) {
        addEditableTags(response[0], 'about_us', true);
    }

    return response[0];
};
//Fetch Guide data
export const getContactusRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: 'contact_us',
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    console.log('Fetched Response:', response);

    if (liveEdit) {
        addEditableTags(response[0], 'contact_us', true);
    }

    return response[0];
};

//Fetch Register Guide data
export const getRegisterGuideRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: 'register_guide',
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    console.log('Fetched Response:', response);

    if (liveEdit) {
        addEditableTags(response[0], 'register_guide', true);
    }

    return response[0];
};

//Fetch Footer Data
export const getFooterRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "footer",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });

    if (liveEdit) {
        addEditableTags(response[0][0], "footer", true);
    }
    return response[0][0];
};

//Fetch Privacy Ploicy Data
export const getPrivacyPolicyRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "privacy_policy",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });

    if (liveEdit) {
        addEditableTags(response[0][0], "privacy_policy", true);
    }
    return response[0][0];
};


//Fetch Terms and services data
export const getTermsAndServicesRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "terms_and_services",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });

    if (liveEdit) {
        addEditableTags(response[0][0], "terms_and_services", true);
    }
    return response[0][0];
};

//Fetch FAQ data
export const getFAQRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "faq",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });

    if (liveEdit) {
        addEditableTags(response[0][0], "faq", true);
    }
    return response[0][0];
};
    

// Fetch Registration Page Data
// export const getRegistrationPageRes = async () => {
//     const response = await Stack.getEntry({
//         contentTypeUid: "registration_page",
//         referenceFieldPath: undefined,
//         jsonRtePath: ["form_description"],
//     });

//     if (liveEdit) {
//         addEditableTags(response[0][0], "registration_page", true);
//     }
//     return response[0][0];
// };

// Fetch View Guide Page Data
// export const getViewGuidePageRes = async () => {
//     const response = await Stack.getEntry({
//         contentTypeUid: "travel_guide",
//         referenceFieldPath: ["related_guides"],
//         jsonRtePath: ["description"],
//     });

//     if (liveEdit) {
//         response[0].forEach((entry) => addEditableTags(entry, "travel_guide", true));
//     }
//     return response[0];
// };

// Meta Data Function
// export const metaData = (seo) => {
//     const metaArr = [];
//     for (const key in seo) {
//         if (seo.enable_search_indexing) {
//             metaArr.push(
//                 <meta
//                     name={
//                         key.includes('meta_')
//                             ? key.split('meta_')[1].toString()
//                             : key.toString()
//                     }
//                     content={seo[key].toString()}
//                     key={key}
//                 />
//             );
//         }
//     }
//     return metaArr;
// };

// export const getHomePageRes = async () => {
//     try {
//       const entry = await Stack.ContentType("homepage").Entry("home").fetch();
  
//       // Handle rich text (if applicable)
//       const description = entry.get("description");
//       const backgroundImage = entry.get("background_image");
//       const buttons = entry.get("buttons");
  
//       return {
//         title: entry.get("title"),
//         description: description ? parse(description) : '', // Parsing rich text if required
//         background_image: backgroundImage ? backgroundImage.url : '', // Ensuring a fallback for image
//         buttons: {
//           button_1: buttons ? buttons.button_1 : '',
//           button_2: buttons ? buttons.button_2 : '',
//         },
//       };
//     } catch (error) {
//       console.error("Error fetching homepage data:", error);
//       throw error;
//     }
//   };
  
  