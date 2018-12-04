import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

// material ui icons
import Input from '@material-ui/icons/Input';
import Contacts from '@material-ui/icons/Contacts';
import Check from '@material-ui/icons/Check';
import Add from '@material-ui/icons/Add';
import Person from '@material-ui/icons/Person';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import SweetAlert from 'react-bootstrap-sweetalert';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardText from 'components/Card/CardText.jsx';
import Table from 'components/Table/Table.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import sweetAlertStyle from 'assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx';

// style for this view
import validationFormsStyle from 'assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx';

class ProjeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedB: false,
      simpleSelect: '',
      multipleSelect: [],
      alert: null,
      show: false,
    };
    this.handleTags = this.handleTags.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }
  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: 'block', marginTop: '-100px' }}
          title="Güncellendi"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + ' ' + this.props.classes.success
          }
        />
      ),
    });
  }
  hideAlert() {
    this.setState({
      alert: null,
    });
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleMultiple = event => {
    this.setState({ multipleSelect: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleTags(regularTags) {
    this.setState({ tags: regularTags });
  }

  render() {
    const { classes } = this.props;
    const fillButtons = [
      { color: 'info', icon: Person },
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close },
    ].map((prop, key) => {
      return (
        <Button color={prop.color} className={classes.actionButton} key={key}>
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    const simpleButtons = [
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close },
    ].map((prop, key) => {
      return (
        <Button
          color={prop.color}
          simple
          className={classes.actionButton}
          key={key}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    const roundButtons = [
      { color: 'info', icon: Person },
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close },
    ].map((prop, key) => {
      return (
        <Button
          round
          color={prop.color}
          className={classes.actionButton + ' ' + classes.actionButtonRound}
          key={key}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    return (
      <div>
        {this.state.alert}
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Input />
                </CardIcon>
                <h4 className={classes.cardIconTitle}> Yeni Proje</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Proje Kategorisi
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={10} lg={8}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Proje Kategorisi
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu,
                        }}
                        classes={{
                          select: classes.select,
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: 'simpleSelect',
                          id: 'simple-select',
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem,
                          }}
                        >
                          Proje Kategorisi
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          Event
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          Outgoing
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Proje Alt Kategorisi
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={10} lg={8}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Proje Alt Kategorisi
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu,
                        }}
                        classes={{
                          select: classes.select,
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: 'simpleSelect',
                          id: 'simple-select',
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem,
                          }}
                        >
                          Proje Alt Kategorisi
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          AVM
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          Outdoor
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Ekip ve Operasyon
                    </FormLabel>
                  </GridItem>

                  <GridItem md={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem md={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem md={3}>
                    <Button
                      justIcon
                      round
                      color="success"
                      className={classes.marginRight}
                    >
                      <Add className={classes.icons} />
                    </Button>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Üretim
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <Button
                      justIcon
                      round
                      color="success"
                      className={classes.marginRight}
                    >
                      <Add className={classes.icons} />
                    </Button>
                  </GridItem>
                </GridContainer>

                <GridContainer justify="left">
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Üretim
                    </FormLabel>
                  </GridItem>
                  <GridItem md={6}>
                    <Table
                      tableData={[
                        [
                          'A Lorem İpsum Dolor',
                          'B Lorem İpsum Dolor',

                          simpleButtons,
                        ],

                        [
                          'A Lorem İpsum Dolor',
                          'B Lorem İpsum Dolor',

                          simpleButtons,
                        ],
                      ]}
                      customCellClasses={[
                        classes.center,
                        classes.right,
                        classes.right,
                      ]}
                      customClassesForCells={[3, 3, 3]}
                      customHeadCellClasses={[
                        classes.center,
                        classes.right,
                        classes.right,
                      ]}
                      customHeadClassesForCells={[0, 4, 5]}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      İzinler
                    </FormLabel>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <Button
                      justIcon
                      round
                      color="success"
                      className={classes.marginRight}
                    >
                      <Add className={classes.icons} />
                    </Button>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Etkinlik Kurguları
                    </FormLabel>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <Button
                      justIcon
                      round
                      color="success"
                      className={classes.marginRight}
                    >
                      <Add className={classes.icons} />
                    </Button>
                  </GridItem>
                </GridContainer>

                <GridContainer justify="center">
                  <GridItem md={8}>
                    <Table
                      tableData={[
                        [
                          'A Lorem İpsum Dolor',
                          'B Lorem İpsum Dolor',

                          simpleButtons,
                        ],

                        [
                          'A Lorem İpsum Dolor',
                          'B Lorem İpsum Dolor',

                          simpleButtons,
                        ],
                      ]}
                      customCellClasses={[
                        classes.center,
                        classes.right,
                        classes.right,
                      ]}
                      customClassesForCells={[0, 4, 5]}
                      customHeadCellClasses={[
                        classes.center,
                        classes.right,
                        classes.right,
                      ]}
                      customHeadClassesForCells={[0, 4, 5]}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Hediye Promosyon
                    </FormLabel>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <Button
                      justIcon
                      round
                      color="success"
                      className={classes.marginRight}
                    >
                      <Add className={classes.icons} />
                    </Button>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Nakliye Kurulum
                    </FormLabel>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Value',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} lg={3}>
                    <Button
                      justIcon
                      round
                      color="success"
                      className={classes.marginRight}
                    >
                      <Add className={classes.icons} />
                    </Button>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Toplam
                    </FormLabel>
                  </GridItem>

                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      1.354.345,23 ₺
                    </FormLabel>
                  </GridItem>
                </GridContainer>

                <GridContainer style={{ 'text-align': 'right' }}>
                  <GridItem md={12}>
                    <Button color="danger">Teklif Oluştur</Button>
                    <Button
                      color="success"
                      onClick={this.successAlert.bind(this)}
                    >
                      Güncelle
                    </Button>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(validationFormsStyle)(ProjeEdit);
