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

class TahsilatEdit extends React.Component {
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
                <h4 className={classes.cardIconTitle}> Yeni Tahsilat</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Tahsilat Tipi - Kişi
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
                        Tahsilat Tipi - Kişi
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
                          Tahsilat Tipi - Kişi
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          Tedarikçi
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          Ekip
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Proje Adı
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
                        Proje Adı
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
                          Proje Adı
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          A Projesi
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          B Projesi
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Tahsilat Talep Eden
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
                </GridContainer>

                <GridContainer>
                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Tutar
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

                  <GridItem md={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Para Birimi
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
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Tahsilat Tipi
                    </FormLabel>
                  </GridItem>
                  <GridItem md={2}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Tahsilat Tipi
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
                          Ödeme Tipi
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          Avans
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          Diğer
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>

                <GridContainer style={{ 'text-align': 'right' }}>
                  <GridItem md={12}>
                    <Button color="danger">Kaydet</Button>
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

export default withStyles(validationFormsStyle)(TahsilatEdit);
