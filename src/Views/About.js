import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {tabs, tabs2, tabs3} from '../Data/Tabs.js';

function About() {

    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>1</Tab>
      <Tab>2</Tab>
      <Tab>3</Tab>

    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>

        </div>
    )
}

export default About;






// export default () => (
//   <Tabs>
//     <TabList>
//       <Tab>1</Tab>
//       <Tab>2</Tab>
//       <Tab>3</Tab>

//     </TabList>

//     <TabPanel>
//       <h2>Any content 1</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 2</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 3</h2>
//     </TabPanel>
//   </Tabs>
// );