async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Error fetching ${endpoint}`);
    }
    return response.json();
}

let baseUrl = "https://cms.globalconnect.hr";
const Gateway = {
    async getProjectPictures(id) {
        return fetchData(`${baseUrl}/projects/pictures/${id}`);
    },

    async getProjectRichText(id) {
        return fetchData(`${baseUrl}/projects/richtext/${id}`);
    },

    async getFirstPicturesList() {
        return fetchData(`${baseUrl}/projects/firstPictures`);
    },

    async getAllProjectsShortInfo() {
        return fetchData(`${baseUrl}/projects/shortInfo`);
    },

    async getAllServicesShortInfo() {
        return fetchData(`${baseUrl}/services/shortInfo`);
    },

    async getServicePictures(id) {
        return fetchData(`${baseUrl}/services/pictures/${id}`);
    },

    async getServiceRichText(id) {
        return fetchData(`${baseUrl}/services/richtext/${id}`);
    },

    async getEmployes() {
        return fetchData(`${baseUrl}/employees`);
    },

    async getReferences() {
        return fetchData(`${baseUrl}/references`);
    }
};

export default Gateway;
