import { defineStore, skipHydrate } from "pinia";
import { ref, computed } from "vue";

export const userStore = defineStore("counter", () => {
  //state
  const rows = ref([]);
  const columns = ref([]);
  const details = ref([]);
  //getters
  const getData = computed(() => {
    (columns.value = [
      {
        name: "samAccountName",
        required: true,
        label: "Nombre Corto",
        align: "left",
        field: (row) => row.samAccountName,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "displayName",
        align: "center",
        label: "Descripcion de la Cuenta",
        field: "displayName",
        sortable: true,
      },
      {
        name: "typeName",
        label: "Tipo_cta",
        field: "typeName",
        sortable: true,
      },
      { name: "idCustodio", label: "ID Custodio", field: "idCustodio" },
      { name: "office", label: "Ubicacion - Sede Agencia", field: "office" },
      {
        name: "departament",
        label: "Ubicacion - Departamento",
        field: "departament",
      },
      {
        name: "enable",
        label: "Estado (Activo)",
        field: "enable",
        sortable: true,
      },
      {
        name: "whenCreated",
        label: "Fecha de Alta",
        field: "whenCreated",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "downCreated",
        label: "Fecha de Baja",
        field: "downCreated",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "cde",
        label: "Pertenece al CDE",
        field: "cde",
        sortable: true,
      },
      {
        name: "commit",
        label: "Comentarios",
        field: "commit",
        sortable: true,
      },
      {
        name: "accountExpirationDate",
        label: "Fecha_Expiracion",
        field: "accountExpirationDate",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "passwordNeverExpires",
        label: "Pwd_NoExpira",
        field: "passwordNeverExpires",
        sortable: true,
      },
      {
        name: "passwordLastSet",
        label: "Pwd_UltimoCambio",
        field: "passwordLastSet",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "passwordExpired",
        label: "Pwd_Expirado",
        field: "passwordExpired",
        sortable: true,
      },
      {
        name: "passwordNotRequired",
        label: "Pwd_NoRequerido",
        field: "passwordNotRequired",
        sortable: true,
      },
      {
        name: "lockedOut",
        label: "Cuenta Bloqueda",
        field: "lockedOut",
        sortable: true,
      },
      {
        name: "title",
        label: "Cargo",
        field: "title",
        sortable: true,
      },
      {
        name: "lastlogondate",
        label: "Ultimo Logueo",
        field: "lastlogondate",
        sortable: true,
      },
      {
        name: "whenChanged",
        label: "Ultimo Cambio",
        field: "whenChanged",
        sortable: true,
      },
      {
        name: "action",
        label: "Acciones",
        field: "edit",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
    ]),
      (rows.value = [
        {
          samAccountName: "5491700754",
          displayName: "Demeter",
          typeName: "Electrical and Fire Alarm",
          idCustodio: "Adelaida",
          office: "Jewelry",
          departament: "Brainsphere",
          enable: false,
          whenCreated: "7/21/2022",
          downCreated: "2/4/2022",
          cde: "Quo Lux",
          commit: "Orange Lichen",
          accountExpirationDate: false,
          passwordNeverExpires: true,
          passwordLastSet: "11/18/2022",
          passwordExpired: true,
          passwordNotRequired: false,
          lockedOut: false,
          title: "Kunze-Weber",
          lastlogondate: "5/6/2022",
          whenChanged: "8/28/2022",
        },
        {
          samAccountName: "9458667895",
          displayName: "Frederique",
          typeName: "Sitework & Site Utilities",
          idCustodio: "Webster",
          office: "Electronics",
          departament: "Edgeify",
          enable: true,
          whenCreated: "5/10/2022",
          downCreated: "1/13/2023",
          cde: "Duobam",
          commit: "Honohono",
          accountExpirationDate: true,
          passwordNeverExpires: true,
          passwordLastSet: "12/23/2022",
          passwordExpired: true,
          passwordNotRequired: false,
          lockedOut: false,
          title: "Stokes, Weimann and Kassulke",
          lastlogondate: "4/4/2022",
          whenChanged: "6/27/2022",
        },
        {
          samAccountName: "0465338615",
          displayName: "Leah",
          typeName: "Roofing (Asphalt)",
          idCustodio: "Deanne",
          office: "Electronics",
          departament: "Skipfire",
          enable: true,
          whenCreated: "6/19/2022",
          downCreated: "11/20/2022",
          cde: "Pannier",
          commit: "Butterworth's Buckwheat",
          accountExpirationDate: true,
          passwordNeverExpires: true,
          passwordLastSet: "6/17/2022",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Wisozk Inc",
          lastlogondate: "4/11/2022",
          whenChanged: "10/15/2022",
        },
        {
          samAccountName: "7400921266",
          displayName: "Orsa",
          typeName: "Structural and Misc Steel (Fabrication)",
          idCustodio: "Christyna",
          office: "Home",
          departament: "Meeveo",
          enable: false,
          whenCreated: "10/2/2022",
          downCreated: "7/31/2022",
          cde: "Stringtough",
          commit: "Aiphanes",
          accountExpirationDate: true,
          passwordNeverExpires: true,
          passwordLastSet: "3/18/2022",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: true,
          title: "Ernser LLC",
          lastlogondate: "10/3/2022",
          whenChanged: "4/2/2022",
        },
        {
          samAccountName: "0160225957",
          displayName: "Rubi",
          typeName: "Framing (Steel)",
          idCustodio: "Fredia",
          office: "Clothing",
          departament: "Meedoo",
          enable: true,
          whenCreated: "1/24/2022",
          downCreated: "9/2/2022",
          cde: "Cardguard",
          commit: "Cyrtandra",
          accountExpirationDate: false,
          passwordNeverExpires: false,
          passwordLastSet: "9/19/2022",
          passwordExpired: true,
          passwordNotRequired: false,
          lockedOut: true,
          title: "Kuhic, Connelly and Hudson",
          lastlogondate: "9/15/2022",
          whenChanged: "7/13/2022",
        },
        {
          samAccountName: "7486664208",
          displayName: "Meta",
          typeName: "Curb & Gutter",
          idCustodio: "Gwenneth",
          office: "Grocery",
          departament: "Livetube",
          enable: true,
          whenCreated: "5/10/2022",
          downCreated: "4/9/2022",
          cde: "Otcom",
          commit: "Rabbitear Iris",
          accountExpirationDate: false,
          passwordNeverExpires: false,
          passwordLastSet: "12/10/2022",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Stark-Bosco",
          lastlogondate: "1/9/2023",
          whenChanged: "8/4/2022",
        },
        {
          samAccountName: "5020953458",
          displayName: "Fannie",
          typeName: "Electrical",
          idCustodio: "Effie",
          office: "Movies",
          departament: "Skiptube",
          enable: true,
          whenCreated: "9/30/2022",
          downCreated: "4/15/2022",
          cde: "Rank",
          commit: "Giant Shield Lichen",
          accountExpirationDate: true,
          passwordNeverExpires: false,
          passwordLastSet: "9/15/2022",
          passwordExpired: true,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Schuster-Tromp",
          lastlogondate: "2/14/2022",
          whenChanged: "3/12/2022",
        },
        {
          samAccountName: "1592339794",
          displayName: "Jessalyn",
          typeName: "Painting & Vinyl Wall Covering",
          idCustodio: "Hollie",
          office: "Books",
          departament: "Jaxnation",
          enable: false,
          whenCreated: "5/15/2022",
          downCreated: "7/7/2022",
          cde: "Konklab",
          commit: "Horsefly's Eye",
          accountExpirationDate: true,
          passwordNeverExpires: true,
          passwordLastSet: "1/8/2023",
          passwordExpired: true,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Carroll LLC",
          lastlogondate: "2/27/2022",
          whenChanged: "6/5/2022",
        },
        {
          samAccountName: "2185073559",
          displayName: "Gibby",
          typeName: "Casework",
          idCustodio: "Daniella",
          office: "Books",
          departament: "Meejo",
          enable: false,
          whenCreated: "2/10/2022",
          downCreated: "11/15/2022",
          cde: "Zoolab",
          commit: "Hawai'i Vetch",
          accountExpirationDate: false,
          passwordNeverExpires: true,
          passwordLastSet: "8/16/2022",
          passwordExpired: true,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Lebsack, Weber and Stokes",
          lastlogondate: "6/15/2022",
          whenChanged: "5/22/2022",
        },
        {
          samAccountName: "7764150932",
          displayName: "Bunni",
          typeName: "Rebar & Wire Mesh Install",
          idCustodio: "Beniamino",
          office: "Industrial",
          departament: "Jetwire",
          enable: true,
          whenCreated: "8/10/2022",
          downCreated: "3/15/2022",
          cde: "Redhold",
          commit: "Rivergrass",
          accountExpirationDate: false,
          passwordNeverExpires: true,
          passwordLastSet: "10/15/2022",
          passwordExpired: false,
          passwordNotRequired: false,
          lockedOut: false,
          title: "Nader-Hudson",
          lastlogondate: "6/14/2022",
          whenChanged: "2/16/2022",
        },
        {
          samAccountName: "9349702681",
          displayName: "Catharina",
          typeName: "Painting & Vinyl Wall Covering",
          idCustodio: "Curtis",
          office: "Outdoors",
          departament: "Latz",
          enable: false,
          whenCreated: "5/15/2022",
          downCreated: "4/8/2022",
          cde: "Bitwolf",
          commit: "Rose's Springparsley",
          accountExpirationDate: false,
          passwordNeverExpires: false,
          passwordLastSet: "10/12/2022",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: true,
          title: "Nicolas, Rau and Cremin",
          lastlogondate: "12/20/2022",
          whenChanged: "6/13/2022",
        },
        {
          samAccountName: "0222586753",
          displayName: "Juliana",
          typeName: "Framing (Steel)",
          idCustodio: "Myrtia",
          office: "Kids",
          departament: "Oyondu",
          enable: false,
          whenCreated: "1/4/2023",
          downCreated: "7/1/2022",
          cde: "Solarbreeze",
          commit: "Softleaf Indian Paintbrush",
          accountExpirationDate: true,
          passwordNeverExpires: false,
          passwordLastSet: "10/8/2022",
          passwordExpired: true,
          passwordNotRequired: false,
          lockedOut: true,
          title: "Maggio, Kiehn and Shields",
          lastlogondate: "11/25/2022",
          whenChanged: "7/22/2022",
        },
        {
          samAccountName: "5431846817",
          displayName: "Charmaine",
          typeName: "Fire Protection",
          idCustodio: "Yolanthe",
          office: "Sports",
          departament: "Tekfly",
          enable: false,
          whenCreated: "12/24/2022",
          downCreated: "7/1/2022",
          cde: "Asoka",
          commit: "Australasian Geranium",
          accountExpirationDate: false,
          passwordNeverExpires: true,
          passwordLastSet: "3/10/2022",
          passwordExpired: false,
          passwordNotRequired: false,
          lockedOut: false,
          title: "Waters Inc",
          lastlogondate: "3/23/2022",
          whenChanged: "6/16/2022",
        },
        {
          samAccountName: "7932782643",
          displayName: "Eden",
          typeName: "Structural & Misc Steel Erection",
          idCustodio: "Welch",
          office: "Movies",
          departament: "Realcube",
          enable: false,
          whenCreated: "11/16/2022",
          downCreated: "10/11/2022",
          cde: "Tin",
          commit: "Orange Lichen",
          accountExpirationDate: false,
          passwordNeverExpires: true,
          passwordLastSet: "9/23/2022",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: false,
          title: "MacGyver Inc",
          lastlogondate: "8/2/2022",
          whenChanged: "11/5/2022",
        },
        {
          samAccountName: "5838281243",
          displayName: "Alicia",
          typeName: "Glass & Glazing",
          idCustodio: "Conrad",
          office: "Toys",
          departament: "Twinte",
          enable: true,
          whenCreated: "4/25/2022",
          downCreated: "7/26/2022",
          cde: "Mat Lam Tam",
          commit: "Stephen's Stork's Bill",
          accountExpirationDate: false,
          passwordNeverExpires: false,
          passwordLastSet: "1/16/2023",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Lynch LLC",
          lastlogondate: "9/12/2022",
          whenChanged: "12/7/2022",
        },
        {
          samAccountName: "3000199756",
          displayName: "Marlowe",
          typeName: "Retaining Wall and Brick Pavers",
          idCustodio: "Rutger",
          office: "Baby",
          departament: "Zooveo",
          enable: true,
          whenCreated: "1/18/2023",
          downCreated: "11/22/2022",
          cde: "Opela",
          commit: "Myrtle Spurge",
          accountExpirationDate: false,
          passwordNeverExpires: false,
          passwordLastSet: "11/17/2022",
          passwordExpired: false,
          passwordNotRequired: false,
          lockedOut: true,
          title: "Corwin, Boehm and Crona",
          lastlogondate: "12/30/2022",
          whenChanged: "2/23/2022",
        },
        {
          samAccountName: "3894260858",
          displayName: "Stearne",
          typeName: "Structural and Misc Steel (Fabrication)",
          idCustodio: "Anstice",
          office: "Computers",
          departament: "Jaxbean",
          enable: false,
          whenCreated: "12/6/2022",
          downCreated: "7/14/2022",
          cde: "Tin",
          commit: "Toothed Sphagnum",
          accountExpirationDate: false,
          passwordNeverExpires: false,
          passwordLastSet: "9/28/2022",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: false,
          title: "McDermott-Ledner",
          lastlogondate: "8/28/2022",
          whenChanged: "4/10/2022",
        },
        {
          samAccountName: "4335388802",
          displayName: "Monah",
          typeName: "Glass & Glazing",
          idCustodio: "Edee",
          office: "Grocery",
          departament: "Jabbersphere",
          enable: false,
          whenCreated: "2/7/2022",
          downCreated: "8/11/2022",
          cde: "Bitchip",
          commit: "Petersen's-spleenwort",
          accountExpirationDate: true,
          passwordNeverExpires: true,
          passwordLastSet: "7/2/2022",
          passwordExpired: false,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Mohr LLC",
          lastlogondate: "8/23/2022",
          whenChanged: "9/18/2022",
        },
        {
          samAccountName: "4184556671",
          displayName: "Chicky",
          typeName: "Painting & Vinyl Wall Covering",
          idCustodio: "Magdalen",
          office: "Beauty",
          departament: "Meevee",
          enable: false,
          whenCreated: "12/3/2022",
          downCreated: "11/25/2022",
          cde: "Subin",
          commit: "Toothed Flatsedge",
          accountExpirationDate: false,
          passwordNeverExpires: false,
          passwordLastSet: "11/3/2022",
          passwordExpired: true,
          passwordNotRequired: true,
          lockedOut: false,
          title: "Harber Group",
          lastlogondate: "5/20/2022",
          whenChanged: "10/27/2022",
        },
        {
          samAccountName: "4166418335",
          displayName: "Jasmin",
          typeName: "Doors, Frames & Hardware",
          idCustodio: "Tye",
          office: "Automotive",
          departament: "Yacero",
          enable: true,
          whenCreated: "5/4/2022",
          downCreated: "3/19/2022",
          cde: "Ventosanzap",
          commit: "Zigzag Spiderwort",
          accountExpirationDate: false,
          passwordNeverExpires: true,
          passwordLastSet: "7/1/2022",
          passwordExpired: false,
          passwordNotRequired: false,
          lockedOut: true,
          title: "Hintz, Kris and Brown",
          lastlogondate: "9/26/2022",
          whenChanged: "11/22/2022",
        },
      ]);
    return rows, columns;
  });
  //functions
  const removeItem = (payload) => {
    const data = rows.value.filter((list) => payload != list.samAccountName);
    rows.value = [];
    rows.value = data;
    return data.name;
  };
  const detailsItem = (payload) => {
    details.value = [];
    const data = rows.value.filter((list) => payload === list.samAccountName);
    details.value.push({
      "Nombre Corto": data[0].samAccountName,
      "Descripcion de la Cuenta": data[0].displayName,
      "Tipo_cta ": data[0].typeName,
      "ID Custodio": data[0].idCustodio,
      "Ubicacion - Sede Agencia": data[0].office,
      "Ubicacion - Departamento": data[0].departament,
      "Estado (Activo)": data[0].enable,
      "Fecha de Alta": data[0].whenCreated,
      "Fecha de Baja": data[0].downCreated,
      "Pertenece al CDE": data[0].cde,
      "Comentarios ": data[0].commit,
      "Fecha_Expiracion ": data[0].accountExpirationDate,
      "Pwd_NoExpira ": data[0].passwordNeverExpires,
      "Pwd_UltimoCambio ": data[0].passwordLastSet,
      "Pwd_Expirado ": data[0].passwordExpired,
      "Pwd_NoRequerido ": data[0].passwordNotRequired,
      "Cuenta Bloqueda ": data[0].lockedOut,
      "Cargo ": data[0].title,
      "Ultimo Logueo": data[0].lastlogondate,
      "Ultimo Cambio": data[0].whenChanged,
    });
    return details;
  };
  //actions
  const increment = (payload) => {
    removeItem(payload);
    return true;
  };

  return {
    rows,
    columns,
    getData,
    details,
    increment: skipHydrate(increment),
    detailsItem: skipHydrate(detailsItem),
  };
});
