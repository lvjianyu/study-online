/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
  'use strict';

  angular.module('ngWeb', []).value('topicItemSource', [
    {
      topic: 'Javascript',
      liStyle: 'bg_lg span3',
      uiSref: 'javascript',
      iStyle: 'icon-leaf',
      spanStyle: 'label label-success'
    },
    {
      topic: 'Angularjs',
      liStyle: 'bg_lb span3',
      uiSref: 'angularjs',
      iStyle: 'icon-fire',
      spanStyle: 'label label-success'
    },
    {
      topic: 'jQuery',
      liStyle: 'bg_dx span3',
      uiSref: 'jquery',
      iStyle: 'icon-bolt',
      spanStyle: 'label label-success'
    },
    {
      topic: 'DesignPattern',
      liStyle: 'bg_dz span3',
      uiSref: 'design-patterns',
      iStyle: 'icon-lightbulb',
      spanStyle: 'label label-success'
    },
    {
      topic: 'NodeJS',
      liStyle: 'bg_ly span3',
      uiSref: 'nodejs',
      iStyle: 'icon-beaker',
      spanStyle: 'label label-success'
    },
    {
      topic: 'HTML5/CSS3',
      liStyle: 'bg_lr span3',
      uiSref: 'html_css',
      iStyle: 'icon-bookmark-empty',
      spanStyle: 'label label-success'
    },
    {
      topic: 'Web Security',
      liStyle: 'bg_dg span3',
      uiSref: 'websafe',
      iStyle: 'icon-lock',
      spanStyle: 'label label-success'
    },
    {
      topic: 'C#',
      liStyle: 'bg_lo span3',
      uiSref: 'csharp',
      iStyle: 'icon-lemon',
      spanStyle: 'label label-success'
    },
    {
      topic: 'MongoDB',
      liStyle: 'bg_ls span3',
      uiSref: 'mongodb',
      iStyle: 'icon-cloud',
      spanStyle: 'label label-success'
    },
    {
      topic: 'SQL',
      liStyle: 'bg_lx span3',
      uiSref: 'sql',
      iStyle: 'icon-th-large',
      spanStyle: 'label label-success'
    },
    {
      topic: 'Planing',
      liStyle: 'bg_lv span3',
      uiSref: 'planing',
      iStyle: ' icon-coffee',
      spanStyle: 'label label-success'
    },
    {
      topic: 'Interview',
      liStyle: 'bg_lp span3',
      uiSref: 'interview',
      iStyle: ' icon-book',
      spanStyle: 'label label-success'
    }
  ]);

})(angular);

