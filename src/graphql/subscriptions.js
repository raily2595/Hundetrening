/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKurs = /* GraphQL */ `
  subscription OnCreateKurs(
    $filter: ModelSubscriptionKursFilterInput
    $owner: String
  ) {
    onCreateKurs(filter: $filter, owner: $owner) {
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
        owner
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
              owner
              __typename
            }
            nextToken
            __typename
          }
          kursID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      kursHendelseId
      owner
      __typename
    }
  }
`;
export const onUpdateKurs = /* GraphQL */ `
  subscription OnUpdateKurs(
    $filter: ModelSubscriptionKursFilterInput
    $owner: String
  ) {
    onUpdateKurs(filter: $filter, owner: $owner) {
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
        owner
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
              owner
              __typename
            }
            nextToken
            __typename
          }
          kursID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      kursHendelseId
      owner
      __typename
    }
  }
`;
export const onDeleteKurs = /* GraphQL */ `
  subscription OnDeleteKurs(
    $filter: ModelSubscriptionKursFilterInput
    $owner: String
  ) {
    onDeleteKurs(filter: $filter, owner: $owner) {
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
        owner
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
              owner
              __typename
            }
            nextToken
            __typename
          }
          kursID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      kursHendelseId
      owner
      __typename
    }
  }
`;
export const onCreateLoep = /* GraphQL */ `
  subscription OnCreateLoep(
    $filter: ModelSubscriptionLoepFilterInput
    $owner: String
  ) {
    onCreateLoep(filter: $filter, owner: $owner) {
      id
      fokus
      egenvurdering
      resultat
      notat
      dommer
      konkurranseID
      hundID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateLoep = /* GraphQL */ `
  subscription OnUpdateLoep(
    $filter: ModelSubscriptionLoepFilterInput
    $owner: String
  ) {
    onUpdateLoep(filter: $filter, owner: $owner) {
      id
      fokus
      egenvurdering
      resultat
      notat
      dommer
      konkurranseID
      hundID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteLoep = /* GraphQL */ `
  subscription OnDeleteLoep(
    $filter: ModelSubscriptionLoepFilterInput
    $owner: String
  ) {
    onDeleteLoep(filter: $filter, owner: $owner) {
      id
      fokus
      egenvurdering
      resultat
      notat
      dommer
      konkurranseID
      hundID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateKonkurranse = /* GraphQL */ `
  subscription OnCreateKonkurranse(
    $filter: ModelSubscriptionKonkurranseFilterInput
    $owner: String
  ) {
    onCreateKonkurranse(filter: $filter, owner: $owner) {
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
        owner
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
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      konkurranseHendelseId
      owner
      __typename
    }
  }
`;
export const onUpdateKonkurranse = /* GraphQL */ `
  subscription OnUpdateKonkurranse(
    $filter: ModelSubscriptionKonkurranseFilterInput
    $owner: String
  ) {
    onUpdateKonkurranse(filter: $filter, owner: $owner) {
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
        owner
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
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      konkurranseHendelseId
      owner
      __typename
    }
  }
`;
export const onDeleteKonkurranse = /* GraphQL */ `
  subscription OnDeleteKonkurranse(
    $filter: ModelSubscriptionKonkurranseFilterInput
    $owner: String
  ) {
    onDeleteKonkurranse(filter: $filter, owner: $owner) {
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
        owner
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
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      konkurranseHendelseId
      owner
      __typename
    }
  }
`;
export const onCreateRepetisjon = /* GraphQL */ `
  subscription OnCreateRepetisjon(
    $filter: ModelSubscriptionRepetisjonFilterInput
    $owner: String
  ) {
    onCreateRepetisjon(filter: $filter, owner: $owner) {
      id
      navn
      resultat
      notat
      oektID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateRepetisjon = /* GraphQL */ `
  subscription OnUpdateRepetisjon(
    $filter: ModelSubscriptionRepetisjonFilterInput
    $owner: String
  ) {
    onUpdateRepetisjon(filter: $filter, owner: $owner) {
      id
      navn
      resultat
      notat
      oektID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteRepetisjon = /* GraphQL */ `
  subscription OnDeleteRepetisjon(
    $filter: ModelSubscriptionRepetisjonFilterInput
    $owner: String
  ) {
    onDeleteRepetisjon(filter: $filter, owner: $owner) {
      id
      navn
      resultat
      notat
      oektID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateOekt = /* GraphQL */ `
  subscription OnCreateOekt(
    $filter: ModelSubscriptionOektFilterInput
    $owner: String
  ) {
    onCreateOekt(filter: $filter, owner: $owner) {
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
          owner
          __typename
        }
        nextToken
        __typename
      }
      kursID
      hundID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateOekt = /* GraphQL */ `
  subscription OnUpdateOekt(
    $filter: ModelSubscriptionOektFilterInput
    $owner: String
  ) {
    onUpdateOekt(filter: $filter, owner: $owner) {
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
          owner
          __typename
        }
        nextToken
        __typename
      }
      kursID
      hundID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteOekt = /* GraphQL */ `
  subscription OnDeleteOekt(
    $filter: ModelSubscriptionOektFilterInput
    $owner: String
  ) {
    onDeleteOekt(filter: $filter, owner: $owner) {
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
          owner
          __typename
        }
        nextToken
        __typename
      }
      kursID
      hundID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateHendelse = /* GraphQL */ `
  subscription OnCreateHendelse(
    $filter: ModelSubscriptionHendelseFilterInput
    $owner: String
  ) {
    onCreateHendelse(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onUpdateHendelse = /* GraphQL */ `
  subscription OnUpdateHendelse(
    $filter: ModelSubscriptionHendelseFilterInput
    $owner: String
  ) {
    onUpdateHendelse(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onDeleteHendelse = /* GraphQL */ `
  subscription OnDeleteHendelse(
    $filter: ModelSubscriptionHendelseFilterInput
    $owner: String
  ) {
    onDeleteHendelse(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onCreateTrening = /* GraphQL */ `
  subscription OnCreateTrening(
    $filter: ModelSubscriptionTreningFilterInput
    $owner: String
  ) {
    onCreateTrening(filter: $filter, owner: $owner) {
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
        owner
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
              owner
              __typename
            }
            nextToken
            __typename
          }
          kursID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      treningHendelseId
      owner
      __typename
    }
  }
`;
export const onUpdateTrening = /* GraphQL */ `
  subscription OnUpdateTrening(
    $filter: ModelSubscriptionTreningFilterInput
    $owner: String
  ) {
    onUpdateTrening(filter: $filter, owner: $owner) {
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
        owner
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
              owner
              __typename
            }
            nextToken
            __typename
          }
          kursID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      treningHendelseId
      owner
      __typename
    }
  }
`;
export const onDeleteTrening = /* GraphQL */ `
  subscription OnDeleteTrening(
    $filter: ModelSubscriptionTreningFilterInput
    $owner: String
  ) {
    onDeleteTrening(filter: $filter, owner: $owner) {
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
        owner
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
              owner
              __typename
            }
            nextToken
            __typename
          }
          kursID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      treningHendelseId
      owner
      __typename
    }
  }
`;
export const onCreateHund = /* GraphQL */ `
  subscription OnCreateHund(
    $filter: ModelSubscriptionHundFilterInput
    $owner: String
  ) {
    onCreateHund(filter: $filter, owner: $owner) {
      id
      navn
      bursdag
      rase
      farge
      Loeps {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Oekts {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateHund = /* GraphQL */ `
  subscription OnUpdateHund(
    $filter: ModelSubscriptionHundFilterInput
    $owner: String
  ) {
    onUpdateHund(filter: $filter, owner: $owner) {
      id
      navn
      bursdag
      rase
      farge
      Loeps {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Oekts {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteHund = /* GraphQL */ `
  subscription OnDeleteHund(
    $filter: ModelSubscriptionHundFilterInput
    $owner: String
  ) {
    onDeleteHund(filter: $filter, owner: $owner) {
      id
      navn
      bursdag
      rase
      farge
      Loeps {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Oekts {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          konkurranseID
          hundID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
