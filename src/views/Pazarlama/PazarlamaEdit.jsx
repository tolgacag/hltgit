import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Datetime from 'react-datetime';

// material ui icons
import Grade from '@material-ui/icons/Grade';
import Contacts from '@material-ui/icons/Contacts';
import Check from '@material-ui/icons/Check';

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

// style for this view
import validationFormsStyle from 'assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx';

class PazarlamaEdit extends React.Component {
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
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Grade />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Pazarlama</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    Müşteri
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10} lg={10}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Müşteri
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
                        Choose City
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        Paris
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="3"
                      >
                        Bucharest
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="4"
                      >
                        Rome
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
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
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Pozisyon
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <CustomInput
                      id="pozisyon"
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
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Görüşme Konusu
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <CustomInput
                      id="gorusme_konusu"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Görüşme Konusu',
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Görüşme Tarihi
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <FormControl fullWidth>
                      <Datetime
                        inputProps={{ placeholder: 'Görüşme Tarihi' }}
                      />
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Açıklama
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} lg={10}>
                    <CustomInput
                      id="aciklama"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Açıklama',
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1} />
                  <GridItem xs={12} sm={1}>
                    <h4>Masraf</h4>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Ulaşım
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} lg={10}>
                    <CustomInput
                      id="masraf_ulasim"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Ulaşım',
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Yemek
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} lg={10}>
                    <CustomInput
                      id="masraf_yemek"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Yemek',
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Konaklama
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} lg={10}>
                    <CustomInput
                      id="masraf_konaklama"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Konaklama',
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
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
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Toplam
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} lg={10}>
                    <FormLabel className={classes.labelHorizontal}>
                      1.000.0000,45 TL
                    </FormLabel>
                  </GridItem>
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

export default withStyles(validationFormsStyle)(PazarlamaEdit);
