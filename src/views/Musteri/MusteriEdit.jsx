import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Datetime from 'react-datetime';

// material ui icons
import Face from '@material-ui/icons/Face';
import Contacts from '@material-ui/icons/Contacts';
import Check from '@material-ui/icons/Check';
import Person from '@material-ui/icons/Person';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardText from 'components/Card/CardText.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ImageUpload from 'components/CustomUpload/ImageUpload.jsx';
import Table from 'components/Table/Table.jsx';

// style for this view
import validationFormsStyle from 'assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx';

class MusteriEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedB: false,
      simpleSelect: '',
      multipleSelect: [],
    };
    this.handleTags = this.handleTags.bind(this);
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
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close },
    ].map((prop, key) => {
      return (
        <Button color={prop.color} className={classes.actionButton} key={key}>
          <prop.icon className={classes.icon} />
        </Button>
      );
    });

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Face />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Müşteri</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Müşteri Adı
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} lg={4}>
                  <CustomInput
                    id="musteri_adi"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      placeholder: 'Müşteri Adı',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Sektör
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={4} lg={4}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Sektör
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
                        Sektör
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        Otomotiv
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="3"
                      >
                        Eğlence
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="4"
                      >
                        Ticaret
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Müşteri Kodu
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4} lg={4}>
                    <CustomInput
                      id="musteri_kodu"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Müşteri Kodu',
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Canias Kodu
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <CustomInput
                      id="canias_kodu"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Canias Kodu',
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Müşteri Logosu
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={1} lg={1}>
                    <ImageUpload
                      addButtonProps={{
                        color: 'rose',
                        round: true,
                      }}
                      changeButtonProps={{
                        color: 'rose',
                        round: true,
                      }}
                      removeButtonProps={{
                        color: 'danger',
                        round: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer />
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <h4>Fatura Bilgileri</h4>
                  </GridItem>

                  <GridContainer>
                    <GridItem xs={12} sm={1}>
                      <FormLabel className={classes.labelHorizontal}>
                        Vergi Dairesi
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4} lg={4}>
                      <CustomInput
                        id="vergi_dairesi"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'Vergi Dairesi',
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={1}>
                      <FormLabel className={classes.labelHorizontal}>
                        Vergi No
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4} lg={4}>
                      <CustomInput
                        id="vergi_no"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'Vergi No',
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <h4>Kişiler</h4>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Kişi
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4} lg={4}>
                    <CustomInput
                      id="kisi"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Kişi',
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Pozisyon
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <CustomInput
                      id="Pozisyon"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Pozisyon',
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Telefon
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4} lg={4}>
                    <CustomInput
                      id="telefon"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Telefon',
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4} lg={4} />

                  <GridItem xs={12} sm={2} md={2} lg={2}>
                    <Button color="danger">Kaydet</Button>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Diğer
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} lg={10}>
                    <CustomInput
                      id="masraf_diger"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Diğer',
                      }}
                    />

                    <Table
                      tableHead={['Kişi', 'Pozisyon', 'Telefon', 'Diğer', '']}
                      tableData={[
                        [
                          'Andrew Mike',
                          'Develop',
                          '05415414141',
                          'Lorem ipsum',
                          fillButtons,
                        ],

                        [
                          'Alex Mike',
                          'Design',
                          '05325323232',
                          'Lorem ipsum',
                          fillButtons,
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
                  <GridItem />
                </GridContainer>
                <GridContainer>
                  <GridItem />
                </GridContainer>
                <br />
                <Button color="danger">Kaydet</Button>
                <Button color="success">Güncelle</Button>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(validationFormsStyle)(MusteriEdit);
