import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Clinical Trial</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div class="ui raised segment">
          <a class="ui red ribbon label">This is a database of a privately and publicly funded clinical studies conducted by the Researcher/Manager</a>
          <h3><i class="folder icon"></i>Current Clinical Trials</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
              floated="right"
              content="Propose Clinical Trial"
              icon="add square"
              primary
              />
            </a>
          </Link>


          {this.renderCampaigns()}
          </div>
          <div class="ui raised segment">
            <a class="ui red ribbon label">This is the personal profile of the Researcher/Manager proposing and conducting these clinical trials</a>
            <div class="ui inverted segment">
            <div class="content">
              <div class="left aligned header">Profile</div>
              <div class="meta">Louell L. Sala, MD MBA DPCOM</div>
              <div class="left aligned description">
              <p>Dr. Sala is a physician and Web Developer interested in the application
              of Technology in the study of Diabetes, HIV/AIDS and Cancer </p>
              </div>
              <div class="statistic">
                <div class="value">
                  <i class="folder open outline icon"></i>5
                </div>
                <div class="label">Peer Reviewed Journals
                </div>
              </div>
            </div>
            <div class="extra content">
              <a><i class="users icon"></i>
              3 members
              </a>
            </div>
            </div>
          </div>

       </Layout>
    );
  }
}

export default CampaignIndex;
