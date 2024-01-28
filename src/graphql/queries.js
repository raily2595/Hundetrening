/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKurs = /* GraphQL */ `
  query GetKurs($id: ID!) {
    getKurs(id: $id) {
      id
      kursholder
      Hendelse {
        id
        navn
        sted
        miljoe
        dato
        type
        handleliste
        pakkeliste
        createdAt
        updatedAt
        __typename
      }
      Oekter {
        items {
          id
          treningID
          fokus
          egenvurdering
          notat
          Repetisjons {
            items {
              id
              navn
              resultat
              notat
              oektID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          kursID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      kursHendelseId
      __typename
    }
  }
`;
export const listKurs = /* GraphQL */ `
  query ListKurs(
    $filter: ModelKursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKurs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        kursholder
        Hendelse {
          id
          navn
          sted
          miljoe
          dato
          type
          handleliste
          pakkeliste
          createdAt
          updatedAt
          __typename
        }
        Oekter {
          items {
            id
            treningID
            fokus
            egenvurdering
            notat
            Repetisjons {
              items {
                id
                navn
                resultat
                notat
                oektID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            kursID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        kursHendelseId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLoep = /* GraphQL */ `
  query GetLoep($id: ID!) {
    getLoep(id: $id) {
      id
      fokus
      egenvurdering
      resultat
      notat
      dommer
      bilde
      konkurranseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLoeps = /* GraphQL */ `
  query ListLoeps(
    $filter: ModelLoepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoeps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fokus
        egenvurdering
        resultat
        notat
        dommer
        bilde
        konkurranseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const loepsByKonkurranseID = /* GraphQL */ `
  query LoepsByKonkurranseID(
    $konkurranseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLoepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    loepsByKonkurranseID(
      konkurranseID: $konkurranseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fokus
        egenvurdering
        resultat
        notat
        dommer
        bilde
        konkurranseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getKonkurranse = /* GraphQL */ `
  query GetKonkurranse($id: ID!) {
    getKonkurranse(id: $id) {
      id
      Hendelse {
        id
        navn
        sted
        miljoe
        dato
        type
        handleliste
        pakkeliste
        createdAt
        updatedAt
        __typename
      }
      Loeper {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          bilde
          konkurranseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      konkurranseHendelseId
      __typename
    }
  }
`;
export const listKonkurranses = /* GraphQL */ `
  query ListKonkurranses(
    $filter: ModelKonkurranseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKonkurranses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Hendelse {
          id
          navn
          sted
          miljoe
          dato
          type
          handleliste
          pakkeliste
          createdAt
          updatedAt
          __typename
        }
        Loeper {
          items {
            id
            fokus
            egenvurdering
            resultat
            notat
            dommer
            bilde
            konkurranseID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        konkurranseHendelseId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRepetisjon = /* GraphQL */ `
  query GetRepetisjon($id: ID!) {
    getRepetisjon(id: $id) {
      id
      navn
      resultat
      notat
      oektID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRepetisjons = /* GraphQL */ `
  query ListRepetisjons(
    $filter: ModelRepetisjonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRepetisjons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        navn
        resultat
        notat
        oektID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const repetisjonsByOektID = /* GraphQL */ `
  query RepetisjonsByOektID(
    $oektID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRepetisjonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repetisjonsByOektID(
      oektID: $oektID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        navn
        resultat
        notat
        oektID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOekt = /* GraphQL */ `
  query GetOekt($id: ID!) {
    getOekt(id: $id) {
      id
      treningID
      fokus
      egenvurdering
      notat
      Repetisjons {
        items {
          id
          navn
          resultat
          notat
          oektID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      kursID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOekts = /* GraphQL */ `
  query ListOekts(
    $filter: ModelOektFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOekts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        treningID
        fokus
        egenvurdering
        notat
        Repetisjons {
          items {
            id
            navn
            resultat
            notat
            oektID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        kursID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const oektsByTreningID = /* GraphQL */ `
  query OektsByTreningID(
    $treningID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOektFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oektsByTreningID(
      treningID: $treningID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        treningID
        fokus
        egenvurdering
        notat
        Repetisjons {
          items {
            id
            navn
            resultat
            notat
            oektID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        kursID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const oektsByKursID = /* GraphQL */ `
  query OektsByKursID(
    $kursID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOektFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oektsByKursID(
      kursID: $kursID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        treningID
        fokus
        egenvurdering
        notat
        Repetisjons {
          items {
            id
            navn
            resultat
            notat
            oektID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        kursID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHendelse = /* GraphQL */ `
  query GetHendelse($id: ID!) {
    getHendelse(id: $id) {
      id
      navn
      sted
      miljoe
      dato
      type
      handleliste
      pakkeliste
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHendelses = /* GraphQL */ `
  query ListHendelses(
    $filter: ModelHendelseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHendelses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        navn
        sted
        miljoe
        dato
        type
        handleliste
        pakkeliste
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTrening = /* GraphQL */ `
  query GetTrening($id: ID!) {
    getTrening(id: $id) {
      id
      Hendelse {
        id
        navn
        sted
        miljoe
        dato
        type
        handleliste
        pakkeliste
        createdAt
        updatedAt
        __typename
      }
      Oekter {
        items {
          id
          treningID
          fokus
          egenvurdering
          notat
          Repetisjons {
            items {
              id
              navn
              resultat
              notat
              oektID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          kursID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      treningHendelseId
      __typename
    }
  }
`;
export const listTrenings = /* GraphQL */ `
  query ListTrenings(
    $filter: ModelTreningFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrenings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Hendelse {
          id
          navn
          sted
          miljoe
          dato
          type
          handleliste
          pakkeliste
          createdAt
          updatedAt
          __typename
        }
        Oekter {
          items {
            id
            treningID
            fokus
            egenvurdering
            notat
            Repetisjons {
              items {
                id
                navn
                resultat
                notat
                oektID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            kursID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        treningHendelseId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHund = /* GraphQL */ `
  query GetHund($id: ID!) {
    getHund(id: $id) {
      id
      navn
      bursdag
      titler
      rase
      farge
      bilde
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listHunds = /* GraphQL */ `
  query ListHunds(
    $filter: ModelHundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHunds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        navn
        bursdag
        titler
        rase
        farge
        bilde
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
