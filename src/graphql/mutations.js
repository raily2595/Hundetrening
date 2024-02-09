/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKurs = /* GraphQL */ `
  mutation CreateKurs(
    $input: CreateKursInput!
    $condition: ModelKursConditionInput
  ) {
    createKurs(input: $input, condition: $condition) {
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
export const updateKurs = /* GraphQL */ `
  mutation UpdateKurs(
    $input: UpdateKursInput!
    $condition: ModelKursConditionInput
  ) {
    updateKurs(input: $input, condition: $condition) {
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
export const deleteKurs = /* GraphQL */ `
  mutation DeleteKurs(
    $input: DeleteKursInput!
    $condition: ModelKursConditionInput
  ) {
    deleteKurs(input: $input, condition: $condition) {
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
export const createLoep = /* GraphQL */ `
  mutation CreateLoep(
    $input: CreateLoepInput!
    $condition: ModelLoepConditionInput
  ) {
    createLoep(input: $input, condition: $condition) {
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
export const updateLoep = /* GraphQL */ `
  mutation UpdateLoep(
    $input: UpdateLoepInput!
    $condition: ModelLoepConditionInput
  ) {
    updateLoep(input: $input, condition: $condition) {
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
export const deleteLoep = /* GraphQL */ `
  mutation DeleteLoep(
    $input: DeleteLoepInput!
    $condition: ModelLoepConditionInput
  ) {
    deleteLoep(input: $input, condition: $condition) {
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
export const createKonkurranse = /* GraphQL */ `
  mutation CreateKonkurranse(
    $input: CreateKonkurranseInput!
    $condition: ModelKonkurranseConditionInput
  ) {
    createKonkurranse(input: $input, condition: $condition) {
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
export const updateKonkurranse = /* GraphQL */ `
  mutation UpdateKonkurranse(
    $input: UpdateKonkurranseInput!
    $condition: ModelKonkurranseConditionInput
  ) {
    updateKonkurranse(input: $input, condition: $condition) {
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
export const deleteKonkurranse = /* GraphQL */ `
  mutation DeleteKonkurranse(
    $input: DeleteKonkurranseInput!
    $condition: ModelKonkurranseConditionInput
  ) {
    deleteKonkurranse(input: $input, condition: $condition) {
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
export const createRepetisjon = /* GraphQL */ `
  mutation CreateRepetisjon(
    $input: CreateRepetisjonInput!
    $condition: ModelRepetisjonConditionInput
  ) {
    createRepetisjon(input: $input, condition: $condition) {
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
export const updateRepetisjon = /* GraphQL */ `
  mutation UpdateRepetisjon(
    $input: UpdateRepetisjonInput!
    $condition: ModelRepetisjonConditionInput
  ) {
    updateRepetisjon(input: $input, condition: $condition) {
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
export const deleteRepetisjon = /* GraphQL */ `
  mutation DeleteRepetisjon(
    $input: DeleteRepetisjonInput!
    $condition: ModelRepetisjonConditionInput
  ) {
    deleteRepetisjon(input: $input, condition: $condition) {
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
export const createOekt = /* GraphQL */ `
  mutation CreateOekt(
    $input: CreateOektInput!
    $condition: ModelOektConditionInput
  ) {
    createOekt(input: $input, condition: $condition) {
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
export const updateOekt = /* GraphQL */ `
  mutation UpdateOekt(
    $input: UpdateOektInput!
    $condition: ModelOektConditionInput
  ) {
    updateOekt(input: $input, condition: $condition) {
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
export const deleteOekt = /* GraphQL */ `
  mutation DeleteOekt(
    $input: DeleteOektInput!
    $condition: ModelOektConditionInput
  ) {
    deleteOekt(input: $input, condition: $condition) {
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
export const createHendelse = /* GraphQL */ `
  mutation CreateHendelse(
    $input: CreateHendelseInput!
    $condition: ModelHendelseConditionInput
  ) {
    createHendelse(input: $input, condition: $condition) {
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
export const updateHendelse = /* GraphQL */ `
  mutation UpdateHendelse(
    $input: UpdateHendelseInput!
    $condition: ModelHendelseConditionInput
  ) {
    updateHendelse(input: $input, condition: $condition) {
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
export const deleteHendelse = /* GraphQL */ `
  mutation DeleteHendelse(
    $input: DeleteHendelseInput!
    $condition: ModelHendelseConditionInput
  ) {
    deleteHendelse(input: $input, condition: $condition) {
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
export const createTrening = /* GraphQL */ `
  mutation CreateTrening(
    $input: CreateTreningInput!
    $condition: ModelTreningConditionInput
  ) {
    createTrening(input: $input, condition: $condition) {
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
export const updateTrening = /* GraphQL */ `
  mutation UpdateTrening(
    $input: UpdateTreningInput!
    $condition: ModelTreningConditionInput
  ) {
    updateTrening(input: $input, condition: $condition) {
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
export const deleteTrening = /* GraphQL */ `
  mutation DeleteTrening(
    $input: DeleteTreningInput!
    $condition: ModelTreningConditionInput
  ) {
    deleteTrening(input: $input, condition: $condition) {
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
export const createHund = /* GraphQL */ `
  mutation CreateHund(
    $input: CreateHundInput!
    $condition: ModelHundConditionInput
  ) {
    createHund(input: $input, condition: $condition) {
      id
      navn
      bursdag
      titler
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
export const updateHund = /* GraphQL */ `
  mutation UpdateHund(
    $input: UpdateHundInput!
    $condition: ModelHundConditionInput
  ) {
    updateHund(input: $input, condition: $condition) {
      id
      navn
      bursdag
      titler
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
export const deleteHund = /* GraphQL */ `
  mutation DeleteHund(
    $input: DeleteHundInput!
    $condition: ModelHundConditionInput
  ) {
    deleteHund(input: $input, condition: $condition) {
      id
      navn
      bursdag
      titler
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
