import tabs from '../Data/Tabs.js';
import { NavLink } from 'react-router-dom';

function Home() {

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

    return (
        <div>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                {tabsElements}
                    </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>

        </div>
    )
}

export default Home;