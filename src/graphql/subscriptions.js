/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKurs = /* GraphQL */ `
  subscription OnCreateKurs($filter: ModelSubscriptionKursFilterInput) {
    onCreateKurs(filter: $filter) {
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
          hundID
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
export const onUpdateKurs = /* GraphQL */ `
  subscription OnUpdateKurs($filter: ModelSubscriptionKursFilterInput) {
    onUpdateKurs(filter: $filter) {
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
          hundID
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
export const onDeleteKurs = /* GraphQL */ `
  subscription OnDeleteKurs($filter: ModelSubscriptionKursFilterInput) {
    onDeleteKurs(filter: $filter) {
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
          hundID
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
export const onCreateLoep = /* GraphQL */ `
  subscription OnCreateLoep($filter: ModelSubscriptionLoepFilterInput) {
    onCreateLoep(filter: $filter) {
      id
      fokus
      egenvurdering
      resultat
      notat
      dommer
      bilde
      hundID
      konkurranseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLoep = /* GraphQL */ `
  subscription OnUpdateLoep($filter: ModelSubscriptionLoepFilterInput) {
    onUpdateLoep(filter: $filter) {
      id
      fokus
      egenvurdering
      resultat
      notat
      dommer
      bilde
      hundID
      konkurranseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLoep = /* GraphQL */ `
  subscription OnDeleteLoep($filter: ModelSubscriptionLoepFilterInput) {
    onDeleteLoep(filter: $filter) {
      id
      fokus
      egenvurdering
      resultat
      notat
      dommer
      bilde
      hundID
      konkurranseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateKonkurranse = /* GraphQL */ `
  subscription OnCreateKonkurranse(
    $filter: ModelSubscriptionKonkurranseFilterInput
  ) {
    onCreateKonkurranse(filter: $filter) {
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
          hundID
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
export const onUpdateKonkurranse = /* GraphQL */ `
  subscription OnUpdateKonkurranse(
    $filter: ModelSubscriptionKonkurranseFilterInput
  ) {
    onUpdateKonkurranse(filter: $filter) {
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
          hundID
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
export const onDeleteKonkurranse = /* GraphQL */ `
  subscription OnDeleteKonkurranse(
    $filter: ModelSubscriptionKonkurranseFilterInput
  ) {
    onDeleteKonkurranse(filter: $filter) {
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
          hundID
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
export const onCreateRepetisjon = /* GraphQL */ `
  subscription OnCreateRepetisjon(
    $filter: ModelSubscriptionRepetisjonFilterInput
  ) {
    onCreateRepetisjon(filter: $filter) {
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
export const onUpdateRepetisjon = /* GraphQL */ `
  subscription OnUpdateRepetisjon(
    $filter: ModelSubscriptionRepetisjonFilterInput
  ) {
    onUpdateRepetisjon(filter: $filter) {
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
export const onDeleteRepetisjon = /* GraphQL */ `
  subscription OnDeleteRepetisjon(
    $filter: ModelSubscriptionRepetisjonFilterInput
  ) {
    onDeleteRepetisjon(filter: $filter) {
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
export const onCreateOekt = /* GraphQL */ `
  subscription OnCreateOekt($filter: ModelSubscriptionOektFilterInput) {
    onCreateOekt(filter: $filter) {
      id
      treningID
      hundID
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
export const onUpdateOekt = /* GraphQL */ `
  subscription OnUpdateOekt($filter: ModelSubscriptionOektFilterInput) {
    onUpdateOekt(filter: $filter) {
      id
      treningID
      hundID
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
export const onDeleteOekt = /* GraphQL */ `
  subscription OnDeleteOekt($filter: ModelSubscriptionOektFilterInput) {
    onDeleteOekt(filter: $filter) {
      id
      treningID
      hundID
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
export const onCreateHendelse = /* GraphQL */ `
  subscription OnCreateHendelse($filter: ModelSubscriptionHendelseFilterInput) {
    onCreateHendelse(filter: $filter) {
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
export const onUpdateHendelse = /* GraphQL */ `
  subscription OnUpdateHendelse($filter: ModelSubscriptionHendelseFilterInput) {
    onUpdateHendelse(filter: $filter) {
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
export const onDeleteHendelse = /* GraphQL */ `
  subscription OnDeleteHendelse($filter: ModelSubscriptionHendelseFilterInput) {
    onDeleteHendelse(filter: $filter) {
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
export const onCreateTrening = /* GraphQL */ `
  subscription OnCreateTrening($filter: ModelSubscriptionTreningFilterInput) {
    onCreateTrening(filter: $filter) {
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
          hundID
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
export const onUpdateTrening = /* GraphQL */ `
  subscription OnUpdateTrening($filter: ModelSubscriptionTreningFilterInput) {
    onUpdateTrening(filter: $filter) {
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
          hundID
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
export const onDeleteTrening = /* GraphQL */ `
  subscription OnDeleteTrening($filter: ModelSubscriptionTreningFilterInput) {
    onDeleteTrening(filter: $filter) {
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
          hundID
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
export const onCreateHund = /* GraphQL */ `
  subscription OnCreateHund($filter: ModelSubscriptionHundFilterInput) {
    onCreateHund(filter: $filter) {
      id
      brukerID
      navn
      bursdag
      titler
      rase
      farge
      bilde
      Oekter {
        items {
          id
          treningID
          hundID
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
      Loeper {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          bilde
          hundID
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
      __typename
    }
  }
`;
export const onUpdateHund = /* GraphQL */ `
  subscription OnUpdateHund($filter: ModelSubscriptionHundFilterInput) {
    onUpdateHund(filter: $filter) {
      id
      brukerID
      navn
      bursdag
      titler
      rase
      farge
      bilde
      Oekter {
        items {
          id
          treningID
          hundID
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
      Loeper {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          bilde
          hundID
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
      __typename
    }
  }
`;
export const onDeleteHund = /* GraphQL */ `
  subscription OnDeleteHund($filter: ModelSubscriptionHundFilterInput) {
    onDeleteHund(filter: $filter) {
      id
      brukerID
      navn
      bursdag
      titler
      rase
      farge
      bilde
      Oekter {
        items {
          id
          treningID
          hundID
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
      Loeper {
        items {
          id
          fokus
          egenvurdering
          resultat
          notat
          dommer
          bilde
          hundID
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
      __typename
    }
  }
`;
export const onCreateBruker = /* GraphQL */ `
  subscription OnCreateBruker($filter: ModelSubscriptionBrukerFilterInput) {
    onCreateBruker(filter: $filter) {
      id
      navn
      Hunder {
        items {
          id
          brukerID
          navn
          bursdag
          titler
          rase
          farge
          bilde
          Oekter {
            items {
              id
              treningID
              hundID
              fokus
              egenvurdering
              notat
              Repetisjons {
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
          Loeper {
            items {
              id
              fokus
              egenvurdering
              resultat
              notat
              dommer
              bilde
              hundID
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBruker = /* GraphQL */ `
  subscription OnUpdateBruker($filter: ModelSubscriptionBrukerFilterInput) {
    onUpdateBruker(filter: $filter) {
      id
      navn
      Hunder {
        items {
          id
          brukerID
          navn
          bursdag
          titler
          rase
          farge
          bilde
          Oekter {
            items {
              id
              treningID
              hundID
              fokus
              egenvurdering
              notat
              Repetisjons {
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
          Loeper {
            items {
              id
              fokus
              egenvurdering
              resultat
              notat
              dommer
              bilde
              hundID
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBruker = /* GraphQL */ `
  subscription OnDeleteBruker($filter: ModelSubscriptionBrukerFilterInput) {
    onDeleteBruker(filter: $filter) {
      id
      navn
      Hunder {
        items {
          id
          brukerID
          navn
          bursdag
          titler
          rase
          farge
          bilde
          Oekter {
            items {
              id
              treningID
              hundID
              fokus
              egenvurdering
              notat
              Repetisjons {
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
          Loeper {
            items {
              id
              fokus
              egenvurdering
              resultat
              notat
              dommer
              bilde
              hundID
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
