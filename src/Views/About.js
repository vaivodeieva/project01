import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function About() {
    

    return (
        <main>
            <div className="container">
                <div className="row pt-2 mb-5">
                    <h1 className="display-4 special-title main-header mb-4 mt-2">About us</h1>
                    <div className="col">
                        <Tabs>
                            <TabList>
                                <Tab><p className="lead mb-1 fw-bolder">A</p></Tab>
                                <Tab><p className="lead mb-1 fw-bolder">B</p></Tab>
                                <Tab><p className="lead mb-1 fw-bolder">C</p></Tab>
                            </TabList>
                            <TabPanel>
                                <Team/>
                            </TabPanel>
                            <TabPanel>
                                <TabHelp/>
                            </TabPanel>
                            <TabPanel>
                                <TabContacts/>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row">
                    <div className="col light-bg">
                    </div>
                </div>
            </div>
        </main>

    )
}

export default About;