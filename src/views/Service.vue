<template>
    <Header>
      
    </Header>
    <Gallery :images="foundList" mode="2"/>
    <BlogText :content="content"></BlogText>

  </template>
  
  
  <script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import BlogText from '../components/BlogText.vue';
import Gallery from '../components/Gallery.vue';

// Mock Gateway fetch helper
const Gateway = {
  async getServicePictures(id) {
    return fetchData(`/services/pictures/${id}`);
  },
  async getServiceRichText(id) {
    return fetchData(`/services/richtext/${id}`);
  },
};

const route = useRoute();
const workId = parseInt(route.params.id);

const imagesList = ref([
{
      list: [
          '/images/copot_kuca_1.png',
          '/images/copot_kuca_2.png',
          '/images/copot_kuca_3.png',
          '/images/copot_kuca_4.png',
          '/images/copot_kuca_5.png',
      ],
      id: 1
  },
  {
      list: [
          '/images/oc_varazdin_1.png',
          '/images/oc_varazdin_2.png',
          '/images/oc_varazdin_3.png',
          '/images/oc_varazdin_4.png',
          '/images/oc_varazdin_5.png',
          '/images/oc_varazdin_6.png',
          '/images/oc_varazdin_7.png',
          '/images/oc_varazdin_8.png',
      ],
      id: 2
  },
  {
      list: [
          '/images/oc_cakovec_1.png',
          '/images/oc_cakovec_2.png',
          '/images/oc_cakovec_3.png',
          '/images/oc_cakovec_4.png',
          '/images/oc_cakovec_5.png',
          '/images/oc_cakovec_6.png',
      ],
      id: 3
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 4
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 5
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 6
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 7
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 8
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 9
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 10
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 11
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 12
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 13
  },
  {
      list: [
          '/images/drustveni_dom_1.jpeg',
          '/images/drustveni_dom_2.jpeg',
          '/images/drustveni_dom_3.jpeg',
          '/images/drustveni_dom_4.jpeg',
          '/images/drustveni_dom_5.jpeg',
          '/images/drustveni_dom_6.jpeg',
          '/images/drustveni_dom_7.jpeg',
          '/images/drustveni_dom_8.jpeg',
          '/images/drustveni_dom_9.jpeg',
      ],
      id: 14
  },
]);

function getListById(id) {
  const item = imagesList.value.find((image) => image.id === id);
  return item ? item.list : null;
}

const foundList = ref(getListById(workId));

const defaultProjectContent = `
  <h2>Beginning of the Project</h2>
  <p>
    The initial phase of the project commenced with an in-depth analysis of user requirements. The team conducted surveys and focus groups to gather insights and understand the core needs of our target audience. This foundational research guided the subsequent design decisions and project scope.
  </p>
  <br>
  <p>
    During this stage, we also outlined the project timeline and key milestones. Each team member was assigned specific roles and responsibilities to ensure a smooth workflow. Collaboration tools were put in place to facilitate communication and document sharing among the team members.
  </p>
  <br>
  <h2>Implementation</h2>
  <p>
    The implementation phase involved translating our designs into a functional product. Our developers worked diligently to build the application, utilizing modern technologies that ensured scalability and performance. Regular testing was integrated into the development cycle to catch and address issues early.
  </p>
  <br>
  <p>
    We also held weekly check-ins to assess progress and align on goals. Feedback from stakeholders was gathered continuously, allowing us to make necessary adjustments to the project plan. This iterative approach proved vital in refining our final product and meeting user expectations.
  </p>
  <br>
  <h2>Current Use</h2>
  <p>
    Currently, the project has been deployed and is being actively used by our target audience. Users have reported positive feedback regarding its usability and features. We are continuously monitoring usage patterns and gathering user feedback to identify areas for improvement and additional functionalities.
  </p>
  <br>
  <p>
    The project has already begun to show tangible benefits, including increased efficiency and user engagement. Future updates are planned based on the insights we've gained, ensuring that the application evolves in response to user needs and technological advancements.
  </p>
  <br>
`;

const defaultServiceContent = `
  <h2>Idejna rješenja</h2>
  <p>
    Faza idejnog rješenja označava početak naših arhitektonskih projekata, u kojoj blisko surađujemo s našim klijentima kako bismo razumjeli njihovu viziju, ciljeve i funkcionalne zahtjeve. Kroz analizu lokacije, procjenu zona i razgovore s dionicima, definiramo ključne aspekte dizajna. Ova faza osigurava da su ciljevi projekta usklađeni s očekivanjima klijenta, budžetom i željenom estetikom.
  </p>
  <br>
  <p>
    Tijekom ove faze naš tim izrađuje preliminarne skice, mood boardove i idejne prikaze kako bi vizualizirao potencijal projekta. Ovi rani dizajni služe kao osnova za daljnji razvoj i pomažu nam u finom usklađivanju opsega projekta i smjera dizajna, osiguravajući glatki prijelaz u detaljno planiranje.
  </p>
  <br>
  <h2>Razrada dizajna</h2>
  <p>
    U fazi razrade dizajna, transformiramo idejne prijedloge u detaljne planove i modele. Naš tim radi na arhitektonskim crtežima, specifikacijama materijala i konstrukcijskim planovima, pritom osiguravajući usklađenost s građevinskim propisima i regulativama. Ova faza uključuje blisku suradnju s inženjerima, konzultantima i izvođačima kako bi se usavršio svaki detalj, osiguravajući izvedivost i ekonomičnost.
  </p>
  <br>
  <p>
    Također surađujemo s klijentima tijekom ove faze kako bismo prikupili povratne informacije o smjeru dizajna. To omogućava modifikacije i prilagodbe, osiguravajući da projekt ostane na pravom putu i odražava viziju klijenta. U ovoj fazi izrađujemo realistične 3D vizualizacije, pružajući klijentima sveobuhvatan prikaz konačnog proizvoda i njegove interakcije s okolnim prostorom.
  </p>
  <br>
  <h2>Izvedba projekta</h2>
  <p>
    Faza izvedbe projekta je trenutak kada dizajn oživljava. Naš tim upravlja procesom gradnje, koordinirajući s izvođačima, dobavljačima i ostalim dionicima kako bi se osiguralo da projekt bude izgrađen prema odobrenim planovima. Pratimo napredak, kvalitetu i sigurnost, održavajući jasnu komunikaciju s klijentom kako bismo riješili bilo kakve brige ili promjene koje se mogu pojaviti.
  </p>
  <br>
  <p>
    Tijekom ove faze osiguravamo da projekt bude dovršen na vrijeme, unutar budžeta i prema najvišim standardima izrade. Nakon završetka gradnje, provodimo detaljan pregled i obavljamo završne prilagodbe prije nego što prostor predamo klijentima. Također pružamo podršku nakon završetka projekta kako bismo osigurali trajnu funkcionalnost i zadovoljstvo korisnika prostora.
  </p>
  <br>
`;

const content = ref(route.path.includes('service') ? defaultServiceContent : defaultProjectContent);

onMounted(async () => {
  try {
    const [images, text] = await Promise.all([
      Gateway.getServicePictures(workId),
      Gateway.getServiceRichText(workId)
    ]);

    if (images && images.length > 0) {
      foundList.value = images;
    }

    if (text && text.text) {
      content.value = text.text;
    }
  } catch (error) {
    console.warn('Failed to fetch service data, using hardcoded content.', error);
  }
});
</script>

  <style lang="scss">
  .wrapper{
    h2{
        font-size: 32px;
        padding-bottom: 20px;
        padding-top: 10px;
        font-weight: 500;
    }
    p{
        font-size: 18px;
    }
  }
 
</style>