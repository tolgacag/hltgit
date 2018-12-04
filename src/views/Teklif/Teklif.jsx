import React from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Dvr from '@material-ui/icons/Dvr';
import Close from '@material-ui/icons/Close';
import Add from '@material-ui/icons/Add';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';

import { dataTable } from 'variables/general.jsx';

import { cardTitle } from 'assets/jss/material-dashboard-pro-react.jsx';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
};

class ReactTables extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = {};

    this.state = {
      data: dataTable.dataRows.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3],
          status: (
            <Button color={prop[4]} style={{ width: '110px' }}>
              {prop[4]}
            </Button>
          ),
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ', \nposition: ' +
                      obj.position +
                      ', \noffice: ' +
                      obj.office +
                      ', \nage: ' +
                      obj.age +
                      '\n}.',
                  );
                }}
                color="warning"
                className="edit"
              >
                <Dvr />
              </Button>{' '}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                className="remove"
              >
                <Close />
              </Button>{' '}
            </div>
          ),
        };
      }),
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <GridContainer style={{ 'margin-top': '20px' }}>
              <GridItem md={6}>
                <div style={{ 'text-align': 'left' }}>
                  <Link to="/TeklifEdit">
                    <Button
                      justIcon
                      square
                      color="success"
                      style={{ 'margin-left': '25px' }}
                      className={classes.marginRight}
                    >
                      <Add className={classes.icons} />
                    </Button>
                  </Link>
                  <span style={{ 'margin-left': '10px', 'font-size': '20px' }}>
                    Teklifler
                  </span>
                </div>
              </GridItem>
            </GridContainer>
            <CardBody>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: 'Name',
                    accessor: 'name',
                  },
                  {
                    Header: 'Position',
                    accessor: 'position',
                  },
                  {
                    Header: 'Office',
                    accessor: 'office',
                  },
                  {
                    Header: 'Age',
                    accessor: 'age',
                  },
                  {
                    Header: 'Status',
                    accessor: 'status',
                  },
                  {
                    Header: 'Actions',
                    accessor: 'actions',
                    sortable: false,
                    filterable: false,
                  },
                ]}
                defaultPageSize={10}
                showPaginationTop={false}
                showPaginationBottom
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ReactTables);
