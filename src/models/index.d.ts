import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerKurs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Kurs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly kursholder?: string | null;
  readonly Hendelse?: Hendelse | null;
  readonly Oekter?: (Oekt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly kursHendelseId?: string | null;
}

type LazyKurs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Kurs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly kursholder?: string | null;
  readonly Hendelse: AsyncItem<Hendelse | undefined>;
  readonly Oekter: AsyncCollection<Oekt>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly kursHendelseId?: string | null;
}

export declare type Kurs = LazyLoading extends LazyLoadingDisabled ? EagerKurs : LazyKurs

export declare const Kurs: (new (init: ModelInit<Kurs>) => Kurs) & {
  copyOf(source: Kurs, mutator: (draft: MutableModel<Kurs>) => MutableModel<Kurs> | void): Kurs;
}

type EagerLoep = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Loep, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fokus?: string | null;
  readonly egenvurdering?: string | null;
  readonly resultat?: string | null;
  readonly notat?: string | null;
  readonly dommer?: string | null;
  readonly bilde?: string | null;
  readonly konkurranseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLoep = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Loep, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fokus?: string | null;
  readonly egenvurdering?: string | null;
  readonly resultat?: string | null;
  readonly notat?: string | null;
  readonly dommer?: string | null;
  readonly bilde?: string | null;
  readonly konkurranseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Loep = LazyLoading extends LazyLoadingDisabled ? EagerLoep : LazyLoep

export declare const Loep: (new (init: ModelInit<Loep>) => Loep) & {
  copyOf(source: Loep, mutator: (draft: MutableModel<Loep>) => MutableModel<Loep> | void): Loep;
}

type EagerKonkurranse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Konkurranse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Hendelse?: Hendelse | null;
  readonly Loeper?: (Loep | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly konkurranseHendelseId?: string | null;
}

type LazyKonkurranse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Konkurranse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Hendelse: AsyncItem<Hendelse | undefined>;
  readonly Loeper: AsyncCollection<Loep>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly konkurranseHendelseId?: string | null;
}

export declare type Konkurranse = LazyLoading extends LazyLoadingDisabled ? EagerKonkurranse : LazyKonkurranse

export declare const Konkurranse: (new (init: ModelInit<Konkurranse>) => Konkurranse) & {
  copyOf(source: Konkurranse, mutator: (draft: MutableModel<Konkurranse>) => MutableModel<Konkurranse> | void): Konkurranse;
}

type EagerRepetisjon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Repetisjon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly resultat?: string | null;
  readonly notat?: string | null;
  readonly oektID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRepetisjon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Repetisjon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly resultat?: string | null;
  readonly notat?: string | null;
  readonly oektID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Repetisjon = LazyLoading extends LazyLoadingDisabled ? EagerRepetisjon : LazyRepetisjon

export declare const Repetisjon: (new (init: ModelInit<Repetisjon>) => Repetisjon) & {
  copyOf(source: Repetisjon, mutator: (draft: MutableModel<Repetisjon>) => MutableModel<Repetisjon> | void): Repetisjon;
}

type EagerOekt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oekt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly treningID?: string | null;
  readonly fokus?: string | null;
  readonly egenvurdering?: string | null;
  readonly notat?: string | null;
  readonly Repetisjons?: (Repetisjon | null)[] | null;
  readonly kursID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOekt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oekt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly treningID?: string | null;
  readonly fokus?: string | null;
  readonly egenvurdering?: string | null;
  readonly notat?: string | null;
  readonly Repetisjons: AsyncCollection<Repetisjon>;
  readonly kursID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Oekt = LazyLoading extends LazyLoadingDisabled ? EagerOekt : LazyOekt

export declare const Oekt: (new (init: ModelInit<Oekt>) => Oekt) & {
  copyOf(source: Oekt, mutator: (draft: MutableModel<Oekt>) => MutableModel<Oekt> | void): Oekt;
}

type EagerHendelse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hendelse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly sted?: string | null;
  readonly miljoe?: string | null;
  readonly dato?: string | null;
  readonly type?: string | null;
  readonly handleliste?: (string | null)[] | null;
  readonly pakkeliste?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHendelse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hendelse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly sted?: string | null;
  readonly miljoe?: string | null;
  readonly dato?: string | null;
  readonly type?: string | null;
  readonly handleliste?: (string | null)[] | null;
  readonly pakkeliste?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hendelse = LazyLoading extends LazyLoadingDisabled ? EagerHendelse : LazyHendelse

export declare const Hendelse: (new (init: ModelInit<Hendelse>) => Hendelse) & {
  copyOf(source: Hendelse, mutator: (draft: MutableModel<Hendelse>) => MutableModel<Hendelse> | void): Hendelse;
}

type EagerTrening = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trening, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Hendelse?: Hendelse | null;
  readonly Oekter?: (Oekt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly treningHendelseId?: string | null;
}

type LazyTrening = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trening, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Hendelse: AsyncItem<Hendelse | undefined>;
  readonly Oekter: AsyncCollection<Oekt>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly treningHendelseId?: string | null;
}

export declare type Trening = LazyLoading extends LazyLoadingDisabled ? EagerTrening : LazyTrening

export declare const Trening: (new (init: ModelInit<Trening>) => Trening) & {
  copyOf(source: Trening, mutator: (draft: MutableModel<Trening>) => MutableModel<Trening> | void): Trening;
}

type EagerHund = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hund, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly brukerID: string;
  readonly navn?: string | null;
  readonly bursdag?: string | null;
  readonly titler?: (string | null)[] | null;
  readonly rase?: string | null;
  readonly farge?: string | null;
  readonly bilde?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHund = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hund, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly brukerID: string;
  readonly navn?: string | null;
  readonly bursdag?: string | null;
  readonly titler?: (string | null)[] | null;
  readonly rase?: string | null;
  readonly farge?: string | null;
  readonly bilde?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hund = LazyLoading extends LazyLoadingDisabled ? EagerHund : LazyHund

export declare const Hund: (new (init: ModelInit<Hund>) => Hund) & {
  copyOf(source: Hund, mutator: (draft: MutableModel<Hund>) => MutableModel<Hund> | void): Hund;
}

type EagerBruker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bruker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly Hunder?: (Hund | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBruker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bruker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly Hunder: AsyncCollection<Hund>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bruker = LazyLoading extends LazyLoadingDisabled ? EagerBruker : LazyBruker

export declare const Bruker: (new (init: ModelInit<Bruker>) => Bruker) & {
  copyOf(source: Bruker, mutator: (draft: MutableModel<Bruker>) => MutableModel<Bruker> | void): Bruker;
}