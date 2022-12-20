import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchErrorComponent } from './observable/catch-error/catch-error.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ConcatMap2Component } from './observable/concat-map2/concat-map2.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { ConcateMapComponent } from './observable/concate-map/concate-map.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { ExaustMapComponent } from './observable/exaust-map/exaust-map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { HotColdComponent } from './observable/hot-cold/hot-cold.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { SwitchMap2Component } from './observable/switch-map2/switch-map2.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { TimerComponent } from './observable/timer/timer.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'fromEvent', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'offrom', component: OfFromComponent},
    {path: 'toArray', component: ToArrayComponent},
    {path: 'custom', component: CustomComponent},
    {path: 'map', component: MapComponent},
    {path: 'pluck', component: PluckComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'tap', component: TapComponent},
    {path: 'retry', component: RetryComponent},
    {path: 'take', component: TakeComponent},
    {path: 'debounceTime', component: DebounceTimeComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'replay-subject', component: ReplaySubjectComponent},
    {path: 'concat', component: ConcatComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'mergeMap', component: MergeMapComponent},
    {path: 'concatMap', component: ConcateMapComponent},
    {path: 'concatMap2', component: ConcatMap2Component},
    {path: 'SwitchMap', component: SwitchMapComponent},
    {path: 'SwitchMapSearch', component: SwitchMap2Component},
    {path: 'exhaustMap', component: ExaustMapComponent},
    {path: 'ShareReplay', component: ShareReplayComponent},
    {path: 'CatchError', component: CatchErrorComponent},
    {path: 'combineLatest', component: CombineLatestComponent},
    {path: 'hotCold', component: HotColdComponent},
 

    
     
  ]},
  {path: '**', redirectTo: 'promise'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
