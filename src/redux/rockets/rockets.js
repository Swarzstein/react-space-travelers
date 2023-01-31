const initialState = [
  {
    id: '0',
    name: 'Falcon 1',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem necessitatibus facere dignissimos unde saepe maiores repellendus reprehenderit nisi, sequi commodi ipsum iure delectus labore magni earum cupiditate perspiciatis quasi distinctio.',
    reserved: true,
    image: '',
  },
  {
    id: '1',
    name: 'Falcon 9',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim molestias nam nisi at? Maiores minus assumenda suscipit provident commodi asperiores voluptatem rerum reprehenderit. Amet eius numquam magnam porro libero.',
    reserved: false,
    image: '',
  },
  {
    id: '2',
    name: 'Falcon Heavy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem provident culpa minus voluptatum minima placeat quidem voluptates necessitatibus, esse nihil ea, facere temporibus corporis unde odit pariatur labore, veritatis voluptatem.',
    reserved: false,
    image: '',
  },
];

export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
