export interface ListadoSucursal {
    opt:                number;
    iD_BusinessUnit:    number;
    description:        string;
    iD_Currency:        number;
    city:               string;
    address1:           string;
    address2:           string;
    iD_Country:         number;
    iD_State:           number;
    zip_Code:           string;
    phone1:             string;
    phone2:             string;
    fax:                string;
    email:              string;
    logo:               null;
    active:             number;
    iD_BusStop:         number;
    iD_Enterprise:      number;
    color:              string;
    nombreCia:          string;
    dirCia:             string;
    telCia:             string;
    impresoraReciboPOS: string;
    flagPrinterPOS:     boolean;
    flaCopias:          boolean;
    acronimo:           string;
}
