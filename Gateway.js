async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Error fetching ${endpoint}`);
    }
    return response.json();
}

let baseUrl = "https://cms.globalconnect.hr/api";
const Gateway = {
    async getProjectPictures(id) {
        return fetchData(`${baseUrl}/project/${id}/pictures`);
    },

    async getProjectRichText(id) {
        return fetchData(`${baseUrl}/project/${id}/richtext`);
    },

    async getFirstPicturesList() {
        return fetchData(`${baseUrl}/project/first-images`);
    },

    async getAllProjectsShortInfo() {
        return fetchData(`${baseUrl}/project/shortInfo`);
    },

    async getAllServicesShortInfo() {
        return fetchData(`${baseUrl}/service/shortInfo`);
    },

    async getServicePictures(id) {
        return fetchData(`${baseUrl}/service/${id}/pictures`);
    },

    async getServiceRichText(id) {
        return fetchData(`${baseUrl}/service/${id}/richtext`);
    },

    async getEmployes() {
        return fetchData(`${baseUrl}/employee`);
    },

    async getReferences() {
        return fetchData(`${baseUrl}/references`);
    }
};

export default Gateway;
