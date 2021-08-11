import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabs, tabs2, tabs3 } from '../Data/Tabs.js';
import { NavLink } from 'react-router-dom';

function About() {

    const tabsElements = tabs.map((tab, index) => {
        return (
            <div className="row mb-5 pb-3 border-bottom " key={index}>
                <div className="col-12 col-md-3" >
                    <NavLink to={'/data/tabs/' + tab.id} >
                        <img className="img-fluid" src={tab.image}  />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/tab/' + tab.id} className="articles-title" >{tab.title}</NavLink>
                    </h3>
                    <p className="text-muted">
                        {tab.text}
                    </p>
                </div>
            </div>
        )
    })

    const tabsElements2 = tabs2.map((tab, index) => {
        return (
            <div className="row mb-5 pb-3 border-bottom " key={index}>
                <div className="col-12 col-md-3" >
                    <NavLink to={'/data/tabs/' + tab.id} >
                        <img className="img-fluid" src={tab.image}  />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/tab/' + tab.id} className="articles-title" >{tab.title}</NavLink>
                    </h3>
                    <p className="text-muted">
                        {tab.text}
                    </p>
                </div>
            </div>
        )
    })

    const tabsElements3 = tabs3.map((tab, index) => {
        return (
            <div className="row mb-5 pb-3 border-bottom " key={index}>
                <div className="col-12 col-md-3" >
                    <NavLink to={'/data/tabs/' + tab.id} >
                        <img className="img-fluid" src={tab.image}  />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/tab/' + tab.id} className="articles-title" >{tab.title}</NavLink>
                    </h3>
                    <p className="text-muted">
                        {tab.text}
                    </p>
                </div>
            </div>
        )
    })




    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                    <Tab>3</Tab>

                </TabList>

                <TabPanel>
                    <h2>{tabsElements}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{tabsElements2}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{tabsElements3}</h2>
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