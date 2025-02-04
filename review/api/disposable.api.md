## API Report File for "@lumino/disposable"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ISignal } from '@lumino/signaling';

// @public
export class DisposableDelegate implements IDisposable {
    constructor(fn: () => void);
    dispose(): void;
    get isDisposed(): boolean;
}

// @public
export class DisposableSet implements IDisposable {
    add(item: IDisposable): void;
    clear(): void;
    contains(item: IDisposable): boolean;
    dispose(): void;
    get isDisposed(): boolean;
    remove(item: IDisposable): void;
}

// @public
export namespace DisposableSet {
    export function from(items: Iterable<IDisposable>): DisposableSet;
}

// @public
export interface IDisposable {
    dispose(): void;
    readonly isDisposed: boolean;
}

// @public
export interface IObservableDisposable extends IDisposable {
    readonly disposed: ISignal<this, void>;
}

// @public
export class ObservableDisposableDelegate extends DisposableDelegate implements IObservableDisposable {
    dispose(): void;
    get disposed(): ISignal<this, void>;
}

// @public
export class ObservableDisposableSet extends DisposableSet implements IObservableDisposable {
    dispose(): void;
    get disposed(): ISignal<this, void>;
}

// @public
export namespace ObservableDisposableSet {
    export function from(items: Iterable<IDisposable>): ObservableDisposableSet;
}

// (No @packageDocumentation comment for this package)

```
