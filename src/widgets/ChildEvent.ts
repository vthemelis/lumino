/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import CoreEvent = require('../core/CoreEvent');

import Widget = require('./Widget');

export = ChildEvent;


/**
 * An event class for child widget related events.
 */
class ChildEvent extends CoreEvent {
  /**
   * Construct a new child event.
   */
  constructor(type: string, child: Widget) {
    super(type);
    this._m_child = child;
  }

  /**
   * The child widget for the event.
   */
  get child(): Widget {
    return this._m_child;
  }

  private _m_child: Widget;
}
