async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Error fetching ${endpoint}`);
    }
    return response.json();
}

const Gateway = {
    async getProjectPictures(id) {
        return fetchData(`/projects/pictures/${id}`);
    },

    async getProjectRichText(id) {
        return fetchData(`/projects/richtext/${id}`);
    },

    async getFirstPicturesList() {
        return fetchData(`/projects/firstPictures`);
    },

    async getAllProjectsShortInfo() {
        return fetchData(`/projects/shortInfo`);
    },

    async getAllServicesShortInfo() {
        return fetchData(`/services/shortInfo`);
    },

    async getServicePictures(id) {
        return fetchData(`/services/pictures/${id}`);
    },

    async getServiceRichText(id) {
        return fetchData(`/services/richtext/${id}`);
    },

    async getEmployes() {
        return fetchData(`/employees`);
    },

    async getReferences() {
        return fetchData(`/references`);
    }
};

export default Gateway;
