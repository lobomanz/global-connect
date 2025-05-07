<template>
  <Header>

  </Header>
  <Gallery :images="foundList" mode="1" />
  <BlogText :content="content"></BlogText>
  <Footer></Footer>


</template>

<script setup>
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import BlogText from '../components/BlogText.vue';
import Gallery from '../components/Gallery.vue';
import { ref, onMounted } from 'vue';
import Gateway from '../../Gateway';
import Footer from '../components/Footer.vue'


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
  const item = imagesList.value.find(image => image.id === id);
  return item ? item.list : null;
}

const foundList = ref(getListById(workId));

const defaultContent = `
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
  <h2>Conceptual Design</h2>
  <p>
    The conceptual design phase marks the beginning of our architectural projects, where we work closely with our clients to understand their vision, goals, and functional requirements. Through site analysis, zoning assessments, and discussions with stakeholders, we define the essential aspects of the design. This phase ensures that the project's objectives are aligned with the client's expectations, budget, and desired aesthetic.
  </p>
  <br>
  <p>
    During this phase, our team produces preliminary sketches, mood boards, and conceptual renderings to visualize the potential of the project. These early designs serve as a foundation for further development and help us refine the project's scope and design direction, ensuring a smooth transition into detailed planning.
  </p>
  <br>

  <h2>Design Development</h2>
  <p>
    In the design development phase, we transform conceptual ideas into detailed plans and models. Our team works on architectural drawings, material specifications, and structural plans while ensuring compliance with building codes and regulations. This stage involves close collaboration with engineers, consultants, and contractors to refine every detail, ensuring feasibility and cost-effectiveness.
  </p>
  <br>
  <p>
    We also engage with clients during this phase to gather feedback on the design direction. This allows for modifications and adjustments, ensuring that the project stays on track and reflects the client's vision. At this point, we create realistic 3D visualizations, offering clients a comprehensive view of the final product and how it will interact with the surrounding environment.
  </p>
  <br>

  <h2>Project Execution</h2>
  <p>
    The project execution phase is where the design comes to life. Our team manages the construction process, coordinating with contractors, suppliers, and other stakeholders to ensure the project is built according to the approved plans. We monitor progress, quality, and safety, while maintaining a clear line of communication with the client to address any concerns or changes that may arise.
  </p>
  <br>
  <p>
    Throughout this stage, we ensure that the project is completed on time, within budget, and to the highest standards of craftsmanship. Once construction is complete, we conduct a thorough inspection and make final adjustments before handing over the space to our clients. We also offer post-project support to ensure ongoing satisfaction and functionality of the space.
  </p>
  <br>
`;

const content = ref(route.path.includes('service') ? defaultServiceContent : defaultContent);

// Fetch and override if successful
onMounted(async () => {
  try {
    const images = await Gateway.getProjectPictures(workId);
    if (images && images.length) {
      foundList.value = images;
    }

    const textResponse = await Gateway.getProjectRichText(workId);
    if (textResponse && textResponse.text) {
      content.value = textResponse.text;
    }
  } catch (err) {
    console.warn('Using fallback content and images due to fetch error:', err);
  }
});
</script>

<style lang="scss">
.wrapper {
  h2 {
    font-size: 32px;
    padding-bottom: 20px;
    padding-top: 10px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
  }
}
</style>