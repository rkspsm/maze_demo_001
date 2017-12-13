if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
var main = function (_, Kotlin) {
  'use strict';
  var numberToInt = Kotlin.numberToInt;
  var equals = Kotlin.equals;
  var Pair = Kotlin.kotlin.Pair;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Throwable = Error;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var withIndex_0 = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  loc_empty.prototype = Object.create(location.prototype);
  loc_empty.prototype.constructor = loc_empty;
  loc_player.prototype = Object.create(location.prototype);
  loc_player.prototype.constructor = loc_player;
  loc_wall.prototype = Object.create(location.prototype);
  loc_wall.prototype.constructor = loc_wall;
  loc_key.prototype = Object.create(location.prototype);
  loc_key.prototype.constructor = loc_key;
  loc_door.prototype = Object.create(location.prototype);
  loc_door.prototype.constructor = loc_door;
  ui_game.prototype = Object.create(major_ui.prototype);
  ui_game.prototype.constructor = ui_game;
  ui_postgame.prototype = Object.create(major_ui.prototype);
  ui_postgame.prototype.constructor = ui_postgame;
  ui_menu.prototype = Object.create(major_ui.prototype);
  ui_menu.prototype.constructor = ui_menu;
  ui_designer.prototype = Object.create(major_ui.prototype);
  ui_designer.prototype.constructor = ui_designer;
  ui_replay.prototype = Object.create(major_ui.prototype);
  ui_replay.prototype.constructor = ui_replay;
  appst_launched.prototype = Object.create(app_state.prototype);
  appst_launched.prototype.constructor = appst_launched;
  appst_game.prototype = Object.create(app_state.prototype);
  appst_game.prototype.constructor = appst_game;
  appst_postgame.prototype = Object.create(app_state.prototype);
  appst_postgame.prototype.constructor = appst_postgame;
  appst_menu.prototype = Object.create(app_state.prototype);
  appst_menu.prototype.constructor = appst_menu;
  appst_designer.prototype = Object.create(app_state.prototype);
  appst_designer.prototype.constructor = appst_designer;
  appst_replay.prototype = Object.create(app_state.prototype);
  appst_replay.prototype.constructor = appst_replay;
  tc_reset.prototype = Object.create(timer_control.prototype);
  tc_reset.prototype.constructor = tc_reset;
  tc_run.prototype = Object.create(timer_control.prototype);
  tc_run.prototype.constructor = tc_run;
  tc_stop.prototype = Object.create(timer_control.prototype);
  tc_stop.prototype.constructor = tc_stop;
  tc_pause.prototype = Object.create(timer_control.prototype);
  tc_pause.prototype.constructor = tc_pause;
  mv_up.prototype = Object.create(movement.prototype);
  mv_up.prototype.constructor = mv_up;
  mv_left.prototype = Object.create(movement.prototype);
  mv_left.prototype.constructor = mv_left;
  mv_right.prototype = Object.create(movement.prototype);
  mv_right.prototype.constructor = mv_right;
  mv_down.prototype = Object.create(movement.prototype);
  mv_down.prototype.constructor = mv_down;
  mvcmd_update_coords.prototype = Object.create(move_command.prototype);
  mvcmd_update_coords.prototype.constructor = mvcmd_update_coords;
  mvcmd_key_update_doors.prototype = Object.create(move_command.prototype);
  mvcmd_key_update_doors.prototype.constructor = mvcmd_key_update_doors;
  mvcmd_trigger_victory.prototype = Object.create(move_command.prototype);
  mvcmd_trigger_victory.prototype.constructor = mvcmd_trigger_victory;
  mvcmd_expend_fuel.prototype = Object.create(move_command.prototype);
  mvcmd_expend_fuel.prototype.constructor = mvcmd_expend_fuel;
  mvcmd_update_player_coords.prototype = Object.create(move_command.prototype);
  mvcmd_update_player_coords.prototype.constructor = mvcmd_update_player_coords;
  mvcmd_append_to_replay.prototype = Object.create(move_command.prototype);
  mvcmd_append_to_replay.prototype.constructor = mvcmd_append_to_replay;
  mvcmd_add_fuel.prototype = Object.create(move_command.prototype);
  mvcmd_add_fuel.prototype.constructor = mvcmd_add_fuel;
  rcmd_init.prototype = Object.create(replay_command.prototype);
  rcmd_init.prototype.constructor = rcmd_init;
  rcmd_loc_update.prototype = Object.create(replay_command.prototype);
  rcmd_loc_update.prototype.constructor = rcmd_loc_update;
  rcmd_fuel_update.prototype = Object.create(replay_command.prototype);
  rcmd_fuel_update.prototype.constructor = rcmd_fuel_update;
  rcmd_finish.prototype = Object.create(replay_command.prototype);
  rcmd_finish.prototype.constructor = rcmd_finish;
  rcmd_abort.prototype = Object.create(replay_command.prototype);
  rcmd_abort.prototype.constructor = rcmd_abort;
  stls_launched.prototype = Object.create(stimulus.prototype);
  stls_launched.prototype.constructor = stls_launched;
  stls_menu_levels_fetched.prototype = Object.create(stimulus.prototype);
  stls_menu_levels_fetched.prototype.constructor = stls_menu_levels_fetched;
  stls_menu_level_selected.prototype = Object.create(stimulus.prototype);
  stls_menu_level_selected.prototype.constructor = stls_menu_level_selected;
  stls_menu_designer.prototype = Object.create(stimulus.prototype);
  stls_menu_designer.prototype.constructor = stls_menu_designer;
  stls_menu_replay.prototype = Object.create(stimulus.prototype);
  stls_menu_replay.prototype.constructor = stls_menu_replay;
  stls_back_from_designer.prototype = Object.create(stimulus.prototype);
  stls_back_from_designer.prototype.constructor = stls_back_from_designer;
  stls_game_moved.prototype = Object.create(stimulus.prototype);
  stls_game_moved.prototype.constructor = stls_game_moved;
  stls_game_tick.prototype = Object.create(stimulus.prototype);
  stls_game_tick.prototype.constructor = stls_game_tick;
  stls_game_pause.prototype = Object.create(stimulus.prototype);
  stls_game_pause.prototype.constructor = stls_game_pause;
  stls_game_quit.prototype = Object.create(stimulus.prototype);
  stls_game_quit.prototype.constructor = stls_game_quit;
  stls_game_victory.prototype = Object.create(stimulus.prototype);
  stls_game_victory.prototype.constructor = stls_game_victory;
  stls_game_fuel_empty.prototype = Object.create(stimulus.prototype);
  stls_game_fuel_empty.prototype.constructor = stls_game_fuel_empty;
  stls_postgame_goto_menu.prototype = Object.create(stimulus.prototype);
  stls_postgame_goto_menu.prototype.constructor = stls_postgame_goto_menu;
  stls_postgame_play_again.prototype = Object.create(stimulus.prototype);
  stls_postgame_play_again.prototype.constructor = stls_postgame_play_again;
  stls_postgame_download_replay.prototype = Object.create(stimulus.prototype);
  stls_postgame_download_replay.prototype.constructor = stls_postgame_download_replay;
  cmd_set_state.prototype = Object.create(command.prototype);
  cmd_set_state.prototype.constructor = cmd_set_state;
  cmd_select_ui.prototype = Object.create(command.prototype);
  cmd_select_ui.prototype.constructor = cmd_select_ui;
  cmd_setup_ui.prototype = Object.create(command.prototype);
  cmd_setup_ui.prototype.constructor = cmd_setup_ui;
  cmd_menu_fetch_builtin_levels.prototype = Object.create(command.prototype);
  cmd_menu_fetch_builtin_levels.prototype.constructor = cmd_menu_fetch_builtin_levels;
  cmd_menu_populate.prototype = Object.create(command.prototype);
  cmd_menu_populate.prototype.constructor = cmd_menu_populate;
  cmd_menu_select_level.prototype = Object.create(command.prototype);
  cmd_menu_select_level.prototype.constructor = cmd_menu_select_level;
  cmd_game_timer.prototype = Object.create(command.prototype);
  cmd_game_timer.prototype.constructor = cmd_game_timer;
  cmd_game_pause.prototype = Object.create(command.prototype);
  cmd_game_pause.prototype.constructor = cmd_game_pause;
  cmd_game_fuel_tick.prototype = Object.create(command.prototype);
  cmd_game_fuel_tick.prototype.constructor = cmd_game_fuel_tick;
  cmd_game_process_move.prototype = Object.create(command.prototype);
  cmd_game_process_move.prototype.constructor = cmd_game_process_move;
  cmd_game_init_replay.prototype = Object.create(command.prototype);
  cmd_game_init_replay.prototype.constructor = cmd_game_init_replay;
  cmd_game_finish_replay.prototype = Object.create(command.prototype);
  cmd_game_finish_replay.prototype.constructor = cmd_game_finish_replay;
  cmd_postgame_reset_map.prototype = Object.create(command.prototype);
  cmd_postgame_reset_map.prototype.constructor = cmd_postgame_reset_map;
  cmd_postgame_set_theme.prototype = Object.create(command.prototype);
  cmd_postgame_set_theme.prototype.constructor = cmd_postgame_set_theme;
  cmd_postgame_prepare_replay.prototype = Object.create(command.prototype);
  cmd_postgame_prepare_replay.prototype.constructor = cmd_postgame_prepare_replay;
  cmd_postgame_offer_replay_download.prototype = Object.create(command.prototype);
  cmd_postgame_offer_replay_download.prototype.constructor = cmd_postgame_offer_replay_download;
  cmd_transfer_to_designer.prototype = Object.create(command.prototype);
  cmd_transfer_to_designer.prototype.constructor = cmd_transfer_to_designer;
  dsm_painting.prototype = Object.create(designer_mode.prototype);
  dsm_painting.prototype.constructor = dsm_painting;
  dsm_configuring.prototype = Object.create(designer_mode.prototype);
  dsm_configuring.prototype.constructor = dsm_configuring;
  json_keys.prototype = Object.create(Enum.prototype);
  json_keys.prototype.constructor = json_keys;
  ds_started.prototype = Object.create(designer_stimulus.prototype);
  ds_started.prototype.constructor = ds_started;
  ds_new.prototype = Object.create(designer_stimulus.prototype);
  ds_new.prototype.constructor = ds_new;
  ds_existing.prototype = Object.create(designer_stimulus.prototype);
  ds_existing.prototype.constructor = ds_existing;
  ds_existing_verified.prototype = Object.create(designer_stimulus.prototype);
  ds_existing_verified.prototype.constructor = ds_existing_verified;
  ds_map_size_specified.prototype = Object.create(designer_stimulus.prototype);
  ds_map_size_specified.prototype.constructor = ds_map_size_specified;
  ds_quit.prototype = Object.create(designer_stimulus.prototype);
  ds_quit.prototype.constructor = ds_quit;
  ds_canvas_mouse_down.prototype = Object.create(designer_stimulus.prototype);
  ds_canvas_mouse_down.prototype.constructor = ds_canvas_mouse_down;
  ds_canvas_mouse_in.prototype = Object.create(designer_stimulus.prototype);
  ds_canvas_mouse_in.prototype.constructor = ds_canvas_mouse_in;
  ds_canvas_mouse_up.prototype = Object.create(designer_stimulus.prototype);
  ds_canvas_mouse_up.prototype.constructor = ds_canvas_mouse_up;
  ds_brush_click.prototype = Object.create(designer_stimulus.prototype);
  ds_brush_click.prototype.constructor = ds_brush_click;
  ds_mode_picked.prototype = Object.create(designer_stimulus.prototype);
  ds_mode_picked.prototype.constructor = ds_mode_picked;
  ds_done.prototype = Object.create(designer_stimulus.prototype);
  ds_done.prototype.constructor = ds_done;
  ds_editing_verified.prototype = Object.create(designer_stimulus.prototype);
  ds_editing_verified.prototype.constructor = ds_editing_verified;
  ds_download.prototype = Object.create(designer_stimulus.prototype);
  ds_download.prototype.constructor = ds_download;
  ds_add_to_menu.prototype = Object.create(designer_stimulus.prototype);
  ds_add_to_menu.prototype.constructor = ds_add_to_menu;
  dcmd_show_new_or_existing.prototype = Object.create(designer_command.prototype);
  dcmd_show_new_or_existing.prototype.constructor = dcmd_show_new_or_existing;
  dcmd_verify_dropped_file.prototype = Object.create(designer_command.prototype);
  dcmd_verify_dropped_file.prototype.constructor = dcmd_verify_dropped_file;
  dcmd_load_dropped_file.prototype = Object.create(designer_command.prototype);
  dcmd_load_dropped_file.prototype.constructor = dcmd_load_dropped_file;
  dcmd_discard_dropped_file.prototype = Object.create(designer_command.prototype);
  dcmd_discard_dropped_file.prototype.constructor = dcmd_discard_dropped_file;
  dcmd_show_size_picker.prototype = Object.create(designer_command.prototype);
  dcmd_show_size_picker.prototype.constructor = dcmd_show_size_picker;
  dcmd_load_new_file.prototype = Object.create(designer_command.prototype);
  dcmd_load_new_file.prototype.constructor = dcmd_load_new_file;
  dcmd_back_to_menu.prototype = Object.create(designer_command.prototype);
  dcmd_back_to_menu.prototype.constructor = dcmd_back_to_menu;
  dcmd_activate_painting.prototype = Object.create(designer_command.prototype);
  dcmd_activate_painting.prototype.constructor = dcmd_activate_painting;
  dcmd_paint_at_coord.prototype = Object.create(designer_command.prototype);
  dcmd_paint_at_coord.prototype.constructor = dcmd_paint_at_coord;
  dcmd_pick_brush.prototype = Object.create(designer_command.prototype);
  dcmd_pick_brush.prototype.constructor = dcmd_pick_brush;
  dcmd_enable_brush_picker.prototype = Object.create(designer_command.prototype);
  dcmd_enable_brush_picker.prototype.constructor = dcmd_enable_brush_picker;
  dcmd_hide_config.prototype = Object.create(designer_command.prototype);
  dcmd_hide_config.prototype.constructor = dcmd_hide_config;
  dcmd_show_selection.prototype = Object.create(designer_command.prototype);
  dcmd_show_selection.prototype.constructor = dcmd_show_selection;
  dcmd_clear_selection.prototype = Object.create(designer_command.prototype);
  dcmd_clear_selection.prototype.constructor = dcmd_clear_selection;
  dcmd_showadd_key_config.prototype = Object.create(designer_command.prototype);
  dcmd_showadd_key_config.prototype.constructor = dcmd_showadd_key_config;
  dcmd_showadd_door_config.prototype = Object.create(designer_command.prototype);
  dcmd_showadd_door_config.prototype.constructor = dcmd_showadd_door_config;
  dcmd_showadd_map_config.prototype = Object.create(designer_command.prototype);
  dcmd_showadd_map_config.prototype.constructor = dcmd_showadd_map_config;
  dcmd_verify_editing.prototype = Object.create(designer_command.prototype);
  dcmd_verify_editing.prototype.constructor = dcmd_verify_editing;
  dcmd_show_map_invalid.prototype = Object.create(designer_command.prototype);
  dcmd_show_map_invalid.prototype.constructor = dcmd_show_map_invalid;
  dcmd_show_done_screen.prototype = Object.create(designer_command.prototype);
  dcmd_show_done_screen.prototype.constructor = dcmd_show_done_screen;
  dcmd_prepare_file.prototype = Object.create(designer_command.prototype);
  dcmd_prepare_file.prototype.constructor = dcmd_prepare_file;
  dcmd_offer_download.prototype = Object.create(designer_command.prototype);
  dcmd_offer_download.prototype.constructor = dcmd_offer_download;
  dcmd_add_to_menu.prototype = Object.create(designer_command.prototype);
  dcmd_add_to_menu.prototype.constructor = dcmd_add_to_menu;
  dstate_just_started.prototype = Object.create(designer_state.prototype);
  dstate_just_started.prototype.constructor = dstate_just_started;
  dstate_file_picking.prototype = Object.create(designer_state.prototype);
  dstate_file_picking.prototype.constructor = dstate_file_picking;
  dstate_size_picking.prototype = Object.create(designer_state.prototype);
  dstate_size_picking.prototype.constructor = dstate_size_picking;
  dstate_drop_verifying.prototype = Object.create(designer_state.prototype);
  dstate_drop_verifying.prototype.constructor = dstate_drop_verifying;
  dstate_painting.prototype = Object.create(designer_state.prototype);
  dstate_painting.prototype.constructor = dstate_painting;
  dstate_configuring.prototype = Object.create(designer_state.prototype);
  dstate_configuring.prototype.constructor = dstate_configuring;
  dstate_edit_verifying.prototype = Object.create(designer_state.prototype);
  dstate_edit_verifying.prototype.constructor = dstate_edit_verifying;
  dstate_finalizing.prototype = Object.create(designer_state.prototype);
  dstate_finalizing.prototype.constructor = dstate_finalizing;
  dstate_exiting.prototype = Object.create(designer_state.prototype);
  dstate_exiting.prototype.constructor = dstate_exiting;
  function _discard($receiver) {
  }
  function current_time() {
    return Date.now();
  }
  function sched(ms, fn) {
    return window.setTimeout(fn, numberToInt(ms));
  }
  function sched_0(ms, fn) {
    return window.setTimeout(fn, ms);
  }
  function is_json($receiver) {
    return equals($receiver.type, 'application/json');
  }
  function json_blob(stuff) {
    return new Blob(new Array(JSON.stringify(stuff)), json([new Pair('type', 'application/json')]));
  }
  function json_download_url(x) {
    return URL.createObjectURL(json_blob(x));
  }
  function read_text_file$lambda(closure$fn, this$read_text_file) {
    return function () {
      closure$fn(this$read_text_file.result);
      return Unit;
    };
  }
  function read_text_file($receiver, f, fn) {
    $receiver.addEventListener('loadend', read_text_file$lambda(fn, $receiver));
    $receiver.readAsText(f);
  }
  function checked($receiver) {
    return $receiver.prop('checked');
  }
  function checked_0($receiver, bv) {
    return $receiver.prop('checked', bv);
  }
  function on_load($receiver, fn) {
    return $receiver.on('load', fn);
  }
  function span_label(v) {
    if (v === void 0)
      v = '';
    return jQuery('<span><\/span>').text(v);
  }
  function div_label(v) {
    if (v === void 0)
      v = '';
    return empty_div().text(v);
  }
  function html_input(t) {
    if (t === void 0)
      t = 'text';
    return jQuery('<input>').attr('type', t);
  }
  function empty_div() {
    return jQuery('<div><\/div>');
  }
  function empty_button() {
    return jQuery('<button><\/button>');
  }
  function ahref$lambda(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    return Unit;
  }
  function ahref() {
    var e = jQuery('<a><\/a>').attr('href', '#');
    e.click(ahref$lambda);
    return e;
  }
  function unordered_list() {
    return jQuery('<ul><\/ul>');
  }
  function list_item() {
    return jQuery('<li><\/li>');
  }
  function br() {
    return jQuery('<br>');
  }
  function hr() {
    return jQuery('<hr>');
  }
  function table() {
    return jQuery('<table><\/table>').attr('cellspacing', '0').attr('cellpadding', '0');
  }
  function table_head() {
    return jQuery('<thead><\/thead>');
  }
  function table_body() {
    return jQuery('<tbody><\/tbody>');
  }
  function table_row() {
    return jQuery('<tr><\/tr>');
  }
  function table_data() {
    return jQuery('<td><\/td>');
  }
  function as_int(df, x) {
    return R.defaultTo(df, parseInt(x));
  }
  function as_double(df, x) {
    return R.defaultTo(df, parseFloat(x));
  }
  function ok_dialog$lambda(closure$dialog) {
    return function (f) {
      jQuery('.main').show();
      closure$dialog.remove();
      return Unit;
    };
  }
  function ok_dialog$lambda_0(evt) {
    evt.stopPropagation();
    return Unit;
  }
  function ok_dialog(msg, _extra) {
    if (_extra === void 0)
      _extra = null;
    var extra = _extra != null ? _extra : empty_div();
    jQuery('.main').hide();
    var dialog = empty_div().css('position', 'absolute').css('top', '0px').css('bottom', '0px').css('z-index', '300').css('opacity', '1').css('background-color', 'white').append(empty_div().text(msg)).append(extra);
    dialog.append(empty_button().text('Ok').click(ok_dialog$lambda(dialog))).on('dragover drop', ok_dialog$lambda_0).innerWidth(jQuery(window).innerWidth()).innerHeight(jQuery(window).innerHeight()).prependTo(jQuery('body'));
  }
  var is_opened_true;
  var is_opened_false;
  function location() {
  }
  location.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'location',
    interfaces: []
  };
  function loc_empty() {
    loc_empty_instance = this;
    location.call(this);
  }
  loc_empty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'loc_empty',
    interfaces: [location]
  };
  var loc_empty_instance = null;
  function loc_empty_getInstance() {
    if (loc_empty_instance === null) {
      new loc_empty();
    }
    return loc_empty_instance;
  }
  function loc_player() {
    loc_player_instance = this;
    location.call(this);
  }
  loc_player.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'loc_player',
    interfaces: [location]
  };
  var loc_player_instance = null;
  function loc_player_getInstance() {
    if (loc_player_instance === null) {
      new loc_player();
    }
    return loc_player_instance;
  }
  function loc_wall() {
    loc_wall_instance = this;
    location.call(this);
  }
  loc_wall.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'loc_wall',
    interfaces: [location]
  };
  var loc_wall_instance = null;
  function loc_wall_getInstance() {
    if (loc_wall_instance === null) {
      new loc_wall();
    }
    return loc_wall_instance;
  }
  function loc_key() {
    loc_key_instance = this;
    location.call(this);
  }
  loc_key.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'loc_key',
    interfaces: [location]
  };
  var loc_key_instance = null;
  function loc_key_getInstance() {
    if (loc_key_instance === null) {
      new loc_key();
    }
    return loc_key_instance;
  }
  function loc_door(opened) {
    location.call(this);
    this.opened = opened;
  }
  loc_door.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'loc_door',
    interfaces: [location]
  };
  loc_door.prototype.component1 = function () {
    return this.opened;
  };
  loc_door.prototype.copy_6taknv$ = function (opened) {
    return new loc_door(opened === void 0 ? this.opened : opened);
  };
  loc_door.prototype.toString = function () {
    return 'loc_door(opened=' + Kotlin.toString(this.opened) + ')';
  };
  loc_door.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opened) | 0;
    return result;
  };
  loc_door.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.opened, other.opened))));
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function copy_loc_map(l) {
    var tmp$;
    var result = ArrayList_init();
    tmp$ = l.iterator();
    while (tmp$.hasNext()) {
      var lr = tmp$.next();
      var row = ArrayList_init();
      row.addAll_brywnq$(lr);
      result.add_11rb$(row);
    }
    return result;
  }
  function loc_map_count(lm, l) {
    var tmp$, tmp$_0;
    var result = 0;
    tmp$ = lm.iterator();
    while (tmp$.hasNext()) {
      var lr = tmp$.next();
      tmp$_0 = lr.iterator();
      while (tmp$_0.hasNext()) {
        var l_ = tmp$_0.next();
        if (equals(l_, l)) {
          result = result + 1 | 0;
        }
      }
    }
    return result;
  }
  function board_find(board, l) {
    var tmp$, tmp$_0;
    tmp$ = withIndex(board).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var row = tmp$_1.component1()
      , lr = tmp$_1.component2();
      tmp$_0 = withIndex(lr).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var col = tmp$_2.component1()
        , l_ = tmp$_2.component2();
        if (equals(l_, l)) {
          return new coords(row, col);
        }
      }
    }
    return new coords(0, 0);
  }
  function loc_map_valid(lm) {
    var tmp$;
    var c1;
    if (lm.size === 0) {
      c1 = true;
    }
     else {
      var sz = lm.get_za3lpa$(0).size;
      c1 = true;
      tmp$ = lm.iterator();
      while (tmp$.hasNext()) {
        var lr_ = tmp$.next();
        if (lr_.size !== sz) {
          c1 = false;
          break;
        }
      }
    }
    var c2 = loc_map_count(lm, loc_player_getInstance()) === 1;
    var c3 = 1 <= (loc_map_count(lm, new loc_door(is_opened_true)) + loc_map_count(lm, new loc_door(is_opened_false)) | 0);
    return c1 && c2 && c3;
  }
  function major_ui() {
  }
  major_ui.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'major_ui',
    interfaces: []
  };
  function ui_game() {
    ui_game_instance = this;
    major_ui.call(this);
  }
  ui_game.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ui_game',
    interfaces: [major_ui]
  };
  var ui_game_instance = null;
  function ui_game_getInstance() {
    if (ui_game_instance === null) {
      new ui_game();
    }
    return ui_game_instance;
  }
  function ui_postgame() {
    ui_postgame_instance = this;
    major_ui.call(this);
  }
  ui_postgame.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ui_postgame',
    interfaces: [major_ui]
  };
  var ui_postgame_instance = null;
  function ui_postgame_getInstance() {
    if (ui_postgame_instance === null) {
      new ui_postgame();
    }
    return ui_postgame_instance;
  }
  function ui_menu() {
    ui_menu_instance = this;
    major_ui.call(this);
  }
  ui_menu.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ui_menu',
    interfaces: [major_ui]
  };
  var ui_menu_instance = null;
  function ui_menu_getInstance() {
    if (ui_menu_instance === null) {
      new ui_menu();
    }
    return ui_menu_instance;
  }
  function ui_designer() {
    ui_designer_instance = this;
    major_ui.call(this);
  }
  ui_designer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ui_designer',
    interfaces: [major_ui]
  };
  var ui_designer_instance = null;
  function ui_designer_getInstance() {
    if (ui_designer_instance === null) {
      new ui_designer();
    }
    return ui_designer_instance;
  }
  function ui_replay() {
    ui_replay_instance = this;
    major_ui.call(this);
  }
  ui_replay.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ui_replay',
    interfaces: [major_ui]
  };
  var ui_replay_instance = null;
  function ui_replay_getInstance() {
    if (ui_replay_instance === null) {
      new ui_replay();
    }
    return ui_replay_instance;
  }
  var is_paused_true;
  var is_paused_false;
  var is_victorious_true;
  var is_victorious_false;
  function app_state() {
  }
  app_state.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'app_state',
    interfaces: []
  };
  function appst_launched() {
    appst_launched_instance = this;
    app_state.call(this);
  }
  appst_launched.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'appst_launched',
    interfaces: [app_state]
  };
  var appst_launched_instance = null;
  function appst_launched_getInstance() {
    if (appst_launched_instance === null) {
      new appst_launched();
    }
    return appst_launched_instance;
  }
  function appst_game(paused) {
    app_state.call(this);
    this.paused = paused;
  }
  appst_game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'appst_game',
    interfaces: [app_state]
  };
  appst_game.prototype.component1 = function () {
    return this.paused;
  };
  appst_game.prototype.copy_6taknv$ = function (paused) {
    return new appst_game(paused === void 0 ? this.paused : paused);
  };
  appst_game.prototype.toString = function () {
    return 'appst_game(paused=' + Kotlin.toString(this.paused) + ')';
  };
  appst_game.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.paused) | 0;
    return result;
  };
  appst_game.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.paused, other.paused))));
  };
  function appst_postgame(is_vict) {
    app_state.call(this);
    this.is_vict = is_vict;
  }
  appst_postgame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'appst_postgame',
    interfaces: [app_state]
  };
  appst_postgame.prototype.component1 = function () {
    return this.is_vict;
  };
  appst_postgame.prototype.copy_6taknv$ = function (is_vict) {
    return new appst_postgame(is_vict === void 0 ? this.is_vict : is_vict);
  };
  appst_postgame.prototype.toString = function () {
    return 'appst_postgame(is_vict=' + Kotlin.toString(this.is_vict) + ')';
  };
  appst_postgame.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.is_vict) | 0;
    return result;
  };
  appst_postgame.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.is_vict, other.is_vict))));
  };
  function appst_menu() {
    appst_menu_instance = this;
    app_state.call(this);
  }
  appst_menu.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'appst_menu',
    interfaces: [app_state]
  };
  var appst_menu_instance = null;
  function appst_menu_getInstance() {
    if (appst_menu_instance === null) {
      new appst_menu();
    }
    return appst_menu_instance;
  }
  function appst_designer() {
    appst_designer_instance = this;
    app_state.call(this);
  }
  appst_designer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'appst_designer',
    interfaces: [app_state]
  };
  var appst_designer_instance = null;
  function appst_designer_getInstance() {
    if (appst_designer_instance === null) {
      new appst_designer();
    }
    return appst_designer_instance;
  }
  function appst_replay() {
    appst_replay_instance = this;
    app_state.call(this);
  }
  appst_replay.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'appst_replay',
    interfaces: [app_state]
  };
  var appst_replay_instance = null;
  function appst_replay_getInstance() {
    if (appst_replay_instance === null) {
      new appst_replay();
    }
    return appst_replay_instance;
  }
  function timer_control() {
  }
  timer_control.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'timer_control',
    interfaces: []
  };
  function tc_reset() {
    tc_reset_instance = this;
    timer_control.call(this);
  }
  tc_reset.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'tc_reset',
    interfaces: [timer_control]
  };
  var tc_reset_instance = null;
  function tc_reset_getInstance() {
    if (tc_reset_instance === null) {
      new tc_reset();
    }
    return tc_reset_instance;
  }
  function tc_run() {
    tc_run_instance = this;
    timer_control.call(this);
  }
  tc_run.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'tc_run',
    interfaces: [timer_control]
  };
  var tc_run_instance = null;
  function tc_run_getInstance() {
    if (tc_run_instance === null) {
      new tc_run();
    }
    return tc_run_instance;
  }
  function tc_stop() {
    tc_stop_instance = this;
    timer_control.call(this);
  }
  tc_stop.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'tc_stop',
    interfaces: [timer_control]
  };
  var tc_stop_instance = null;
  function tc_stop_getInstance() {
    if (tc_stop_instance === null) {
      new tc_stop();
    }
    return tc_stop_instance;
  }
  function tc_pause() {
    tc_pause_instance = this;
    timer_control.call(this);
  }
  tc_pause.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'tc_pause',
    interfaces: [timer_control]
  };
  var tc_pause_instance = null;
  function tc_pause_getInstance() {
    if (tc_pause_instance === null) {
      new tc_pause();
    }
    return tc_pause_instance;
  }
  function coords(row, col) {
    if (row === void 0)
      row = 0;
    if (col === void 0)
      col = 0;
    this.row = row;
    this.col = col;
  }
  coords.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'coords',
    interfaces: []
  };
  coords.prototype.component1 = function () {
    return this.row;
  };
  coords.prototype.component2 = function () {
    return this.col;
  };
  coords.prototype.copy_vux9f0$ = function (row, col) {
    return new coords(row === void 0 ? this.row : row, col === void 0 ? this.col : col);
  };
  coords.prototype.toString = function () {
    return 'coords(row=' + Kotlin.toString(this.row) + (', col=' + Kotlin.toString(this.col)) + ')';
  };
  coords.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.col) | 0;
    return result;
  };
  coords.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.row, other.row) && Kotlin.equals(this.col, other.col)))));
  };
  function movement() {
  }
  movement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'movement',
    interfaces: []
  };
  function mv_up() {
    mv_up_instance = this;
    movement.call(this);
  }
  mv_up.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'mv_up',
    interfaces: [movement]
  };
  var mv_up_instance = null;
  function mv_up_getInstance() {
    if (mv_up_instance === null) {
      new mv_up();
    }
    return mv_up_instance;
  }
  function mv_left() {
    mv_left_instance = this;
    movement.call(this);
  }
  mv_left.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'mv_left',
    interfaces: [movement]
  };
  var mv_left_instance = null;
  function mv_left_getInstance() {
    if (mv_left_instance === null) {
      new mv_left();
    }
    return mv_left_instance;
  }
  function mv_right() {
    mv_right_instance = this;
    movement.call(this);
  }
  mv_right.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'mv_right',
    interfaces: [movement]
  };
  var mv_right_instance = null;
  function mv_right_getInstance() {
    if (mv_right_instance === null) {
      new mv_right();
    }
    return mv_right_instance;
  }
  function mv_down() {
    mv_down_instance = this;
    movement.call(this);
  }
  mv_down.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'mv_down',
    interfaces: [movement]
  };
  var mv_down_instance = null;
  function mv_down_getInstance() {
    if (mv_down_instance === null) {
      new mv_down();
    }
    return mv_down_instance;
  }
  function game_fuel(remaining) {
    this.remaining = remaining;
  }
  game_fuel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'game_fuel',
    interfaces: []
  };
  game_fuel.prototype.component1 = function () {
    return this.remaining;
  };
  game_fuel.prototype.copy_za3lpa$ = function (remaining) {
    return new game_fuel(remaining === void 0 ? this.remaining : remaining);
  };
  game_fuel.prototype.toString = function () {
    return 'game_fuel(remaining=' + Kotlin.toString(this.remaining) + ')';
  };
  game_fuel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.remaining) | 0;
    return result;
  };
  game_fuel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.remaining, other.remaining))));
  };
  function move_command() {
  }
  move_command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'move_command',
    interfaces: []
  };
  function mvcmd_update_coords(c, l) {
    move_command.call(this);
    this.c = c;
    this.l = l;
  }
  mvcmd_update_coords.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'mvcmd_update_coords',
    interfaces: [move_command]
  };
  mvcmd_update_coords.prototype.component1 = function () {
    return this.c;
  };
  mvcmd_update_coords.prototype.component2 = function () {
    return this.l;
  };
  mvcmd_update_coords.prototype.copy_vfdyyj$ = function (c, l) {
    return new mvcmd_update_coords(c === void 0 ? this.c : c, l === void 0 ? this.l : l);
  };
  mvcmd_update_coords.prototype.toString = function () {
    return 'mvcmd_update_coords(c=' + Kotlin.toString(this.c) + (', l=' + Kotlin.toString(this.l)) + ')';
  };
  mvcmd_update_coords.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    return result;
  };
  mvcmd_update_coords.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.c, other.c) && Kotlin.equals(this.l, other.l)))));
  };
  function mvcmd_key_update_doors() {
    mvcmd_key_update_doors_instance = this;
    move_command.call(this);
  }
  mvcmd_key_update_doors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'mvcmd_key_update_doors',
    interfaces: [move_command]
  };
  var mvcmd_key_update_doors_instance = null;
  function mvcmd_key_update_doors_getInstance() {
    if (mvcmd_key_update_doors_instance === null) {
      new mvcmd_key_update_doors();
    }
    return mvcmd_key_update_doors_instance;
  }
  function mvcmd_trigger_victory() {
    mvcmd_trigger_victory_instance = this;
    move_command.call(this);
  }
  mvcmd_trigger_victory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'mvcmd_trigger_victory',
    interfaces: [move_command]
  };
  var mvcmd_trigger_victory_instance = null;
  function mvcmd_trigger_victory_getInstance() {
    if (mvcmd_trigger_victory_instance === null) {
      new mvcmd_trigger_victory();
    }
    return mvcmd_trigger_victory_instance;
  }
  function mvcmd_expend_fuel() {
    mvcmd_expend_fuel_instance = this;
    move_command.call(this);
  }
  mvcmd_expend_fuel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'mvcmd_expend_fuel',
    interfaces: [move_command]
  };
  var mvcmd_expend_fuel_instance = null;
  function mvcmd_expend_fuel_getInstance() {
    if (mvcmd_expend_fuel_instance === null) {
      new mvcmd_expend_fuel();
    }
    return mvcmd_expend_fuel_instance;
  }
  function mvcmd_update_player_coords(c) {
    move_command.call(this);
    this.c = c;
  }
  mvcmd_update_player_coords.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'mvcmd_update_player_coords',
    interfaces: [move_command]
  };
  mvcmd_update_player_coords.prototype.component1 = function () {
    return this.c;
  };
  mvcmd_update_player_coords.prototype.copy_ewn8ib$ = function (c) {
    return new mvcmd_update_player_coords(c === void 0 ? this.c : c);
  };
  mvcmd_update_player_coords.prototype.toString = function () {
    return 'mvcmd_update_player_coords(c=' + Kotlin.toString(this.c) + ')';
  };
  mvcmd_update_player_coords.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  mvcmd_update_player_coords.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function mvcmd_append_to_replay(lups) {
    move_command.call(this);
    this.lups = lups;
  }
  mvcmd_append_to_replay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'mvcmd_append_to_replay',
    interfaces: [move_command]
  };
  mvcmd_append_to_replay.prototype.component1 = function () {
    return this.lups;
  };
  mvcmd_append_to_replay.prototype.copy_ujlgny$ = function (lups) {
    return new mvcmd_append_to_replay(lups === void 0 ? this.lups : lups);
  };
  mvcmd_append_to_replay.prototype.toString = function () {
    return 'mvcmd_append_to_replay(lups=' + Kotlin.toString(this.lups) + ')';
  };
  mvcmd_append_to_replay.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lups) | 0;
    return result;
  };
  mvcmd_append_to_replay.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.lups, other.lups))));
  };
  function mvcmd_add_fuel(c) {
    move_command.call(this);
    this.c = c;
  }
  mvcmd_add_fuel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'mvcmd_add_fuel',
    interfaces: [move_command]
  };
  mvcmd_add_fuel.prototype.component1 = function () {
    return this.c;
  };
  mvcmd_add_fuel.prototype.copy_ewn8ib$ = function (c) {
    return new mvcmd_add_fuel(c === void 0 ? this.c : c);
  };
  mvcmd_add_fuel.prototype.toString = function () {
    return 'mvcmd_add_fuel(c=' + Kotlin.toString(this.c) + ')';
  };
  mvcmd_add_fuel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  mvcmd_add_fuel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function process_move(mrow, mcol, board, src) {
    this.mrow = mrow;
    this.mcol = mcol;
    this.board = board;
    this.src = src;
  }
  process_move.prototype.move_within_bounds_u0l1by$ = function (m) {
    var tmp$;
    if (Kotlin.isType(m, mv_up))
      tmp$ = this.src.row === 0 ? null : this.src.copy_vux9f0$(this.src.row - 1 | 0);
    else if (Kotlin.isType(m, mv_down))
      tmp$ = this.src.row === this.mrow ? null : this.src.copy_vux9f0$(this.src.row + 1 | 0);
    else if (Kotlin.isType(m, mv_left))
      tmp$ = this.src.col === 0 ? null : this.src.copy_vux9f0$(void 0, this.src.col - 1 | 0);
    else if (Kotlin.isType(m, mv_right))
      tmp$ = this.src.col === this.mcol ? null : this.src.copy_vux9f0$(void 0, this.src.col + 1 | 0);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  process_move.prototype.map_location_ewn8ib$ = function (c) {
    return this.board.get_za3lpa$(c.row).get_za3lpa$(c.col);
  };
  process_move.prototype.invoke_u0l1by$ = function (mv) {
    var _dest = this.move_within_bounds_u0l1by$(mv);
    if (_dest != null) {
      var tmp$, tmp$_0;
      var loc = this.map_location_ewn8ib$(_dest);
      if (Kotlin.isType(loc, loc_empty))
        tmp$_0 = [new mvcmd_update_coords(this.src, loc_empty_getInstance()), new mvcmd_update_coords(_dest, loc_player_getInstance()), new mvcmd_update_player_coords(_dest), mvcmd_expend_fuel_getInstance(), new mvcmd_append_to_replay([new Pair(this.src, loc_empty_getInstance()), new Pair(_dest, loc_player_getInstance())])];
      else if (Kotlin.isType(loc, loc_key))
        tmp$_0 = [new mvcmd_update_coords(this.src, loc_empty_getInstance()), new mvcmd_update_coords(_dest, loc_player_getInstance()), new mvcmd_update_player_coords(_dest), mvcmd_key_update_doors_getInstance(), new mvcmd_add_fuel(_dest), new mvcmd_append_to_replay([new Pair(this.src, loc_empty_getInstance()), new Pair(_dest, loc_player_getInstance())])];
      else if (Kotlin.isType(loc, loc_door)) {
        tmp$ = loc.opened;
        if (tmp$ === false)
          tmp$_0 = [];
        else if (tmp$ === true)
          tmp$_0 = [new mvcmd_update_coords(this.src, loc_empty_getInstance()), new mvcmd_update_coords(_dest, loc_player_getInstance()), new mvcmd_update_player_coords(_dest), new mvcmd_append_to_replay([new Pair(this.src, loc_empty_getInstance()), new Pair(_dest, loc_player_getInstance())]), mvcmd_trigger_victory_getInstance()];
        else
          tmp$_0 = Kotlin.noWhenBranchMatched();
      }
       else
        tmp$_0 = [];
      return tmp$_0;
    }
    return [];
  };
  process_move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'process_move',
    interfaces: []
  };
  function replay_command() {
  }
  replay_command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'replay_command',
    interfaces: []
  };
  function rcmd_init(gt) {
    replay_command.call(this);
    this.gt = gt;
  }
  rcmd_init.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'rcmd_init',
    interfaces: [replay_command]
  };
  rcmd_init.prototype.component1 = function () {
    return this.gt;
  };
  rcmd_init.prototype.copy_14dthe$ = function (gt) {
    return new rcmd_init(gt === void 0 ? this.gt : gt);
  };
  rcmd_init.prototype.toString = function () {
    return 'rcmd_init(gt=' + Kotlin.toString(this.gt) + ')';
  };
  rcmd_init.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gt) | 0;
    return result;
  };
  rcmd_init.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.gt, other.gt))));
  };
  function rcmd_loc_update(gt, lups) {
    replay_command.call(this);
    this.gt = gt;
    this.lups = lups;
  }
  rcmd_loc_update.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'rcmd_loc_update',
    interfaces: [replay_command]
  };
  rcmd_loc_update.prototype.component1 = function () {
    return this.gt;
  };
  rcmd_loc_update.prototype.component2 = function () {
    return this.lups;
  };
  rcmd_loc_update.prototype.copy_l3pvgs$ = function (gt, lups) {
    return new rcmd_loc_update(gt === void 0 ? this.gt : gt, lups === void 0 ? this.lups : lups);
  };
  rcmd_loc_update.prototype.toString = function () {
    return 'rcmd_loc_update(gt=' + Kotlin.toString(this.gt) + (', lups=' + Kotlin.toString(this.lups)) + ')';
  };
  rcmd_loc_update.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gt) | 0;
    result = result * 31 + Kotlin.hashCode(this.lups) | 0;
    return result;
  };
  rcmd_loc_update.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gt, other.gt) && Kotlin.equals(this.lups, other.lups)))));
  };
  function rcmd_fuel_update(gt, fuel) {
    replay_command.call(this);
    this.gt = gt;
    this.fuel = fuel;
  }
  rcmd_fuel_update.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'rcmd_fuel_update',
    interfaces: [replay_command]
  };
  rcmd_fuel_update.prototype.component1 = function () {
    return this.gt;
  };
  rcmd_fuel_update.prototype.component2 = function () {
    return this.fuel;
  };
  rcmd_fuel_update.prototype.copy_73qw6a$ = function (gt, fuel) {
    return new rcmd_fuel_update(gt === void 0 ? this.gt : gt, fuel === void 0 ? this.fuel : fuel);
  };
  rcmd_fuel_update.prototype.toString = function () {
    return 'rcmd_fuel_update(gt=' + Kotlin.toString(this.gt) + (', fuel=' + Kotlin.toString(this.fuel)) + ')';
  };
  rcmd_fuel_update.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gt) | 0;
    result = result * 31 + Kotlin.hashCode(this.fuel) | 0;
    return result;
  };
  rcmd_fuel_update.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gt, other.gt) && Kotlin.equals(this.fuel, other.fuel)))));
  };
  function rcmd_finish(gt, is_vict) {
    replay_command.call(this);
    this.gt = gt;
    this.is_vict = is_vict;
  }
  rcmd_finish.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'rcmd_finish',
    interfaces: [replay_command]
  };
  rcmd_finish.prototype.component1 = function () {
    return this.gt;
  };
  rcmd_finish.prototype.component2 = function () {
    return this.is_vict;
  };
  rcmd_finish.prototype.copy_8555vt$ = function (gt, is_vict) {
    return new rcmd_finish(gt === void 0 ? this.gt : gt, is_vict === void 0 ? this.is_vict : is_vict);
  };
  rcmd_finish.prototype.toString = function () {
    return 'rcmd_finish(gt=' + Kotlin.toString(this.gt) + (', is_vict=' + Kotlin.toString(this.is_vict)) + ')';
  };
  rcmd_finish.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gt) | 0;
    result = result * 31 + Kotlin.hashCode(this.is_vict) | 0;
    return result;
  };
  rcmd_finish.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gt, other.gt) && Kotlin.equals(this.is_vict, other.is_vict)))));
  };
  function rcmd_abort(gt) {
    replay_command.call(this);
    this.gt = gt;
  }
  rcmd_abort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'rcmd_abort',
    interfaces: [replay_command]
  };
  rcmd_abort.prototype.component1 = function () {
    return this.gt;
  };
  rcmd_abort.prototype.copy_14dthe$ = function (gt) {
    return new rcmd_abort(gt === void 0 ? this.gt : gt);
  };
  rcmd_abort.prototype.toString = function () {
    return 'rcmd_abort(gt=' + Kotlin.toString(this.gt) + ')';
  };
  rcmd_abort.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gt) | 0;
    return result;
  };
  rcmd_abort.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.gt, other.gt))));
  };
  function replay_context(fuel, st) {
    this.fuel = fuel;
    this.st = st;
  }
  Object.defineProperty(replay_context.prototype, 'gt', {
    get: function () {
      return current_time();
    }
  });
  replay_context.prototype.relproc_move_replay_lxs97w$ = function (cmd) {
    var tmp$;
    if (Kotlin.isType(cmd, mvcmd_append_to_replay))
      tmp$ = [new rcmd_fuel_update(this.gt, this.fuel.copy_za3lpa$()), new rcmd_loc_update(this.gt, cmd.lups)];
    else
      tmp$ = [];
    return tmp$;
  };
  replay_context.prototype.relproc_replay_z2l7oc$ = function (cmd) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(cmd, cmd_game_init_replay))
      tmp$_0 = [new rcmd_init(this.gt)];
    else if (Kotlin.isType(cmd, cmd_game_finish_replay)) {
      var tmp$_1;
      if (cmd.is_vict != null) {
        var block$result;
        var tmp$_2;
        tmp$_2 = cmd.is_vict;
        if (tmp$_2 === true) {
          block$result = [new rcmd_finish(this.gt, is_victorious_true)];
        }
         else if (tmp$_2 === false) {
          block$result = [new rcmd_finish(this.gt, is_victorious_false)];
        }
         else {
          block$result = Kotlin.noWhenBranchMatched();
        }
        tmp$_1 = block$result;
      }
       else
        tmp$_1 = null;
      tmp$_0 = (tmp$ = tmp$_1) != null ? tmp$ : [new rcmd_abort(this.gt)];
    }
     else
      tmp$_0 = [];
    return tmp$_0;
  };
  replay_context.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'replay_context',
    interfaces: []
  };
  function stimulus() {
  }
  stimulus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'stimulus',
    interfaces: []
  };
  function stls_launched() {
    stls_launched_instance = this;
    stimulus.call(this);
  }
  stls_launched.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_launched',
    interfaces: [stimulus]
  };
  var stls_launched_instance = null;
  function stls_launched_getInstance() {
    if (stls_launched_instance === null) {
      new stls_launched();
    }
    return stls_launched_instance;
  }
  function stls_menu_levels_fetched() {
    stls_menu_levels_fetched_instance = this;
    stimulus.call(this);
  }
  stls_menu_levels_fetched.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_menu_levels_fetched',
    interfaces: [stimulus]
  };
  var stls_menu_levels_fetched_instance = null;
  function stls_menu_levels_fetched_getInstance() {
    if (stls_menu_levels_fetched_instance === null) {
      new stls_menu_levels_fetched();
    }
    return stls_menu_levels_fetched_instance;
  }
  function stls_menu_level_selected(li) {
    stimulus.call(this);
    this.li = li;
  }
  stls_menu_level_selected.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'stls_menu_level_selected',
    interfaces: [stimulus]
  };
  stls_menu_level_selected.prototype.component1 = function () {
    return this.li;
  };
  stls_menu_level_selected.prototype.copy_za3lpa$ = function (li) {
    return new stls_menu_level_selected(li === void 0 ? this.li : li);
  };
  stls_menu_level_selected.prototype.toString = function () {
    return 'stls_menu_level_selected(li=' + Kotlin.toString(this.li) + ')';
  };
  stls_menu_level_selected.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.li) | 0;
    return result;
  };
  stls_menu_level_selected.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.li, other.li))));
  };
  function stls_menu_designer() {
    stls_menu_designer_instance = this;
    stimulus.call(this);
  }
  stls_menu_designer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_menu_designer',
    interfaces: [stimulus]
  };
  var stls_menu_designer_instance = null;
  function stls_menu_designer_getInstance() {
    if (stls_menu_designer_instance === null) {
      new stls_menu_designer();
    }
    return stls_menu_designer_instance;
  }
  function stls_menu_replay() {
    stls_menu_replay_instance = this;
    stimulus.call(this);
  }
  stls_menu_replay.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_menu_replay',
    interfaces: [stimulus]
  };
  var stls_menu_replay_instance = null;
  function stls_menu_replay_getInstance() {
    if (stls_menu_replay_instance === null) {
      new stls_menu_replay();
    }
    return stls_menu_replay_instance;
  }
  function stls_back_from_designer() {
    stls_back_from_designer_instance = this;
    stimulus.call(this);
  }
  stls_back_from_designer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_back_from_designer',
    interfaces: [stimulus]
  };
  var stls_back_from_designer_instance = null;
  function stls_back_from_designer_getInstance() {
    if (stls_back_from_designer_instance === null) {
      new stls_back_from_designer();
    }
    return stls_back_from_designer_instance;
  }
  function stls_game_moved(m) {
    stimulus.call(this);
    this.m = m;
  }
  stls_game_moved.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'stls_game_moved',
    interfaces: [stimulus]
  };
  stls_game_moved.prototype.component1 = function () {
    return this.m;
  };
  stls_game_moved.prototype.copy_u0l1by$ = function (m) {
    return new stls_game_moved(m === void 0 ? this.m : m);
  };
  stls_game_moved.prototype.toString = function () {
    return 'stls_game_moved(m=' + Kotlin.toString(this.m) + ')';
  };
  stls_game_moved.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m) | 0;
    return result;
  };
  stls_game_moved.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.m, other.m))));
  };
  function stls_game_tick() {
    stls_game_tick_instance = this;
    stimulus.call(this);
  }
  stls_game_tick.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_game_tick',
    interfaces: [stimulus]
  };
  var stls_game_tick_instance = null;
  function stls_game_tick_getInstance() {
    if (stls_game_tick_instance === null) {
      new stls_game_tick();
    }
    return stls_game_tick_instance;
  }
  function stls_game_pause(pause) {
    stimulus.call(this);
    this.pause = pause;
  }
  stls_game_pause.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'stls_game_pause',
    interfaces: [stimulus]
  };
  stls_game_pause.prototype.component1 = function () {
    return this.pause;
  };
  stls_game_pause.prototype.copy_6taknv$ = function (pause) {
    return new stls_game_pause(pause === void 0 ? this.pause : pause);
  };
  stls_game_pause.prototype.toString = function () {
    return 'stls_game_pause(pause=' + Kotlin.toString(this.pause) + ')';
  };
  stls_game_pause.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pause) | 0;
    return result;
  };
  stls_game_pause.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pause, other.pause))));
  };
  function stls_game_quit() {
    stls_game_quit_instance = this;
    stimulus.call(this);
  }
  stls_game_quit.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_game_quit',
    interfaces: [stimulus]
  };
  var stls_game_quit_instance = null;
  function stls_game_quit_getInstance() {
    if (stls_game_quit_instance === null) {
      new stls_game_quit();
    }
    return stls_game_quit_instance;
  }
  function stls_game_victory() {
    stls_game_victory_instance = this;
    stimulus.call(this);
  }
  stls_game_victory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_game_victory',
    interfaces: [stimulus]
  };
  var stls_game_victory_instance = null;
  function stls_game_victory_getInstance() {
    if (stls_game_victory_instance === null) {
      new stls_game_victory();
    }
    return stls_game_victory_instance;
  }
  function stls_game_fuel_empty() {
    stls_game_fuel_empty_instance = this;
    stimulus.call(this);
  }
  stls_game_fuel_empty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_game_fuel_empty',
    interfaces: [stimulus]
  };
  var stls_game_fuel_empty_instance = null;
  function stls_game_fuel_empty_getInstance() {
    if (stls_game_fuel_empty_instance === null) {
      new stls_game_fuel_empty();
    }
    return stls_game_fuel_empty_instance;
  }
  function stls_postgame_goto_menu() {
    stls_postgame_goto_menu_instance = this;
    stimulus.call(this);
  }
  stls_postgame_goto_menu.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_postgame_goto_menu',
    interfaces: [stimulus]
  };
  var stls_postgame_goto_menu_instance = null;
  function stls_postgame_goto_menu_getInstance() {
    if (stls_postgame_goto_menu_instance === null) {
      new stls_postgame_goto_menu();
    }
    return stls_postgame_goto_menu_instance;
  }
  function stls_postgame_play_again() {
    stls_postgame_play_again_instance = this;
    stimulus.call(this);
  }
  stls_postgame_play_again.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_postgame_play_again',
    interfaces: [stimulus]
  };
  var stls_postgame_play_again_instance = null;
  function stls_postgame_play_again_getInstance() {
    if (stls_postgame_play_again_instance === null) {
      new stls_postgame_play_again();
    }
    return stls_postgame_play_again_instance;
  }
  function stls_postgame_download_replay() {
    stls_postgame_download_replay_instance = this;
    stimulus.call(this);
  }
  stls_postgame_download_replay.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'stls_postgame_download_replay',
    interfaces: [stimulus]
  };
  var stls_postgame_download_replay_instance = null;
  function stls_postgame_download_replay_getInstance() {
    if (stls_postgame_download_replay_instance === null) {
      new stls_postgame_download_replay();
    }
    return stls_postgame_download_replay_instance;
  }
  function command() {
  }
  command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'command',
    interfaces: []
  };
  function cmd_set_state(state) {
    command.call(this);
    this.state = state;
  }
  cmd_set_state.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_set_state',
    interfaces: [command]
  };
  cmd_set_state.prototype.component1 = function () {
    return this.state;
  };
  cmd_set_state.prototype.copy_jp2lc4$ = function (state) {
    return new cmd_set_state(state === void 0 ? this.state : state);
  };
  cmd_set_state.prototype.toString = function () {
    return 'cmd_set_state(state=' + Kotlin.toString(this.state) + ')';
  };
  cmd_set_state.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  cmd_set_state.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.state, other.state))));
  };
  function cmd_select_ui(ui) {
    command.call(this);
    this.ui = ui;
  }
  cmd_select_ui.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_select_ui',
    interfaces: [command]
  };
  cmd_select_ui.prototype.component1 = function () {
    return this.ui;
  };
  cmd_select_ui.prototype.copy_w3erzd$ = function (ui) {
    return new cmd_select_ui(ui === void 0 ? this.ui : ui);
  };
  cmd_select_ui.prototype.toString = function () {
    return 'cmd_select_ui(ui=' + Kotlin.toString(this.ui) + ')';
  };
  cmd_select_ui.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ui) | 0;
    return result;
  };
  cmd_select_ui.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ui, other.ui))));
  };
  function cmd_setup_ui() {
    cmd_setup_ui_instance = this;
    command.call(this);
  }
  cmd_setup_ui.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_setup_ui',
    interfaces: [command]
  };
  var cmd_setup_ui_instance = null;
  function cmd_setup_ui_getInstance() {
    if (cmd_setup_ui_instance === null) {
      new cmd_setup_ui();
    }
    return cmd_setup_ui_instance;
  }
  function cmd_menu_fetch_builtin_levels() {
    cmd_menu_fetch_builtin_levels_instance = this;
    command.call(this);
  }
  cmd_menu_fetch_builtin_levels.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_menu_fetch_builtin_levels',
    interfaces: [command]
  };
  var cmd_menu_fetch_builtin_levels_instance = null;
  function cmd_menu_fetch_builtin_levels_getInstance() {
    if (cmd_menu_fetch_builtin_levels_instance === null) {
      new cmd_menu_fetch_builtin_levels();
    }
    return cmd_menu_fetch_builtin_levels_instance;
  }
  function cmd_menu_populate() {
    cmd_menu_populate_instance = this;
    command.call(this);
  }
  cmd_menu_populate.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_menu_populate',
    interfaces: [command]
  };
  var cmd_menu_populate_instance = null;
  function cmd_menu_populate_getInstance() {
    if (cmd_menu_populate_instance === null) {
      new cmd_menu_populate();
    }
    return cmd_menu_populate_instance;
  }
  function cmd_menu_select_level(li) {
    command.call(this);
    this.li = li;
  }
  cmd_menu_select_level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_menu_select_level',
    interfaces: [command]
  };
  cmd_menu_select_level.prototype.component1 = function () {
    return this.li;
  };
  cmd_menu_select_level.prototype.copy_za3lpa$ = function (li) {
    return new cmd_menu_select_level(li === void 0 ? this.li : li);
  };
  cmd_menu_select_level.prototype.toString = function () {
    return 'cmd_menu_select_level(li=' + Kotlin.toString(this.li) + ')';
  };
  cmd_menu_select_level.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.li) | 0;
    return result;
  };
  cmd_menu_select_level.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.li, other.li))));
  };
  function cmd_game_timer(tc) {
    command.call(this);
    this.tc = tc;
  }
  cmd_game_timer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_game_timer',
    interfaces: [command]
  };
  cmd_game_timer.prototype.component1 = function () {
    return this.tc;
  };
  cmd_game_timer.prototype.copy_snd3f0$ = function (tc) {
    return new cmd_game_timer(tc === void 0 ? this.tc : tc);
  };
  cmd_game_timer.prototype.toString = function () {
    return 'cmd_game_timer(tc=' + Kotlin.toString(this.tc) + ')';
  };
  cmd_game_timer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tc) | 0;
    return result;
  };
  cmd_game_timer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.tc, other.tc))));
  };
  function cmd_game_pause(pause) {
    command.call(this);
    this.pause = pause;
  }
  cmd_game_pause.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_game_pause',
    interfaces: [command]
  };
  cmd_game_pause.prototype.component1 = function () {
    return this.pause;
  };
  cmd_game_pause.prototype.copy_6taknv$ = function (pause) {
    return new cmd_game_pause(pause === void 0 ? this.pause : pause);
  };
  cmd_game_pause.prototype.toString = function () {
    return 'cmd_game_pause(pause=' + Kotlin.toString(this.pause) + ')';
  };
  cmd_game_pause.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pause) | 0;
    return result;
  };
  cmd_game_pause.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pause, other.pause))));
  };
  function cmd_game_fuel_tick() {
    cmd_game_fuel_tick_instance = this;
    command.call(this);
  }
  cmd_game_fuel_tick.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_game_fuel_tick',
    interfaces: [command]
  };
  var cmd_game_fuel_tick_instance = null;
  function cmd_game_fuel_tick_getInstance() {
    if (cmd_game_fuel_tick_instance === null) {
      new cmd_game_fuel_tick();
    }
    return cmd_game_fuel_tick_instance;
  }
  function cmd_game_process_move(m) {
    command.call(this);
    this.m = m;
  }
  cmd_game_process_move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_game_process_move',
    interfaces: [command]
  };
  cmd_game_process_move.prototype.component1 = function () {
    return this.m;
  };
  cmd_game_process_move.prototype.copy_u0l1by$ = function (m) {
    return new cmd_game_process_move(m === void 0 ? this.m : m);
  };
  cmd_game_process_move.prototype.toString = function () {
    return 'cmd_game_process_move(m=' + Kotlin.toString(this.m) + ')';
  };
  cmd_game_process_move.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m) | 0;
    return result;
  };
  cmd_game_process_move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.m, other.m))));
  };
  function cmd_game_init_replay() {
    cmd_game_init_replay_instance = this;
    command.call(this);
  }
  cmd_game_init_replay.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_game_init_replay',
    interfaces: [command]
  };
  var cmd_game_init_replay_instance = null;
  function cmd_game_init_replay_getInstance() {
    if (cmd_game_init_replay_instance === null) {
      new cmd_game_init_replay();
    }
    return cmd_game_init_replay_instance;
  }
  function cmd_game_finish_replay(is_vict) {
    command.call(this);
    this.is_vict = is_vict;
  }
  cmd_game_finish_replay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_game_finish_replay',
    interfaces: [command]
  };
  cmd_game_finish_replay.prototype.component1 = function () {
    return this.is_vict;
  };
  cmd_game_finish_replay.prototype.copy_1v8dbw$ = function (is_vict) {
    return new cmd_game_finish_replay(is_vict === void 0 ? this.is_vict : is_vict);
  };
  cmd_game_finish_replay.prototype.toString = function () {
    return 'cmd_game_finish_replay(is_vict=' + Kotlin.toString(this.is_vict) + ')';
  };
  cmd_game_finish_replay.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.is_vict) | 0;
    return result;
  };
  cmd_game_finish_replay.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.is_vict, other.is_vict))));
  };
  function cmd_postgame_reset_map() {
    cmd_postgame_reset_map_instance = this;
    command.call(this);
  }
  cmd_postgame_reset_map.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_postgame_reset_map',
    interfaces: [command]
  };
  var cmd_postgame_reset_map_instance = null;
  function cmd_postgame_reset_map_getInstance() {
    if (cmd_postgame_reset_map_instance === null) {
      new cmd_postgame_reset_map();
    }
    return cmd_postgame_reset_map_instance;
  }
  function cmd_postgame_set_theme(is_vict) {
    command.call(this);
    this.is_vict = is_vict;
  }
  cmd_postgame_set_theme.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cmd_postgame_set_theme',
    interfaces: [command]
  };
  cmd_postgame_set_theme.prototype.component1 = function () {
    return this.is_vict;
  };
  cmd_postgame_set_theme.prototype.copy_6taknv$ = function (is_vict) {
    return new cmd_postgame_set_theme(is_vict === void 0 ? this.is_vict : is_vict);
  };
  cmd_postgame_set_theme.prototype.toString = function () {
    return 'cmd_postgame_set_theme(is_vict=' + Kotlin.toString(this.is_vict) + ')';
  };
  cmd_postgame_set_theme.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.is_vict) | 0;
    return result;
  };
  cmd_postgame_set_theme.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.is_vict, other.is_vict))));
  };
  function cmd_postgame_prepare_replay() {
    cmd_postgame_prepare_replay_instance = this;
    command.call(this);
  }
  cmd_postgame_prepare_replay.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_postgame_prepare_replay',
    interfaces: [command]
  };
  var cmd_postgame_prepare_replay_instance = null;
  function cmd_postgame_prepare_replay_getInstance() {
    if (cmd_postgame_prepare_replay_instance === null) {
      new cmd_postgame_prepare_replay();
    }
    return cmd_postgame_prepare_replay_instance;
  }
  function cmd_postgame_offer_replay_download() {
    cmd_postgame_offer_replay_download_instance = this;
    command.call(this);
  }
  cmd_postgame_offer_replay_download.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_postgame_offer_replay_download',
    interfaces: [command]
  };
  var cmd_postgame_offer_replay_download_instance = null;
  function cmd_postgame_offer_replay_download_getInstance() {
    if (cmd_postgame_offer_replay_download_instance === null) {
      new cmd_postgame_offer_replay_download();
    }
    return cmd_postgame_offer_replay_download_instance;
  }
  function cmd_transfer_to_designer() {
    cmd_transfer_to_designer_instance = this;
    command.call(this);
  }
  cmd_transfer_to_designer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cmd_transfer_to_designer',
    interfaces: [command]
  };
  var cmd_transfer_to_designer_instance = null;
  function cmd_transfer_to_designer_getInstance() {
    if (cmd_transfer_to_designer_instance === null) {
      new cmd_transfer_to_designer();
    }
    return cmd_transfer_to_designer_instance;
  }
  function process(ast, stim) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType(ast, appst_launched)) {
      if (Kotlin.isType(stim, stls_launched))
        tmp$_2 = [cmd_setup_ui_getInstance(), new cmd_set_state(appst_menu_getInstance()), new cmd_select_ui(ui_menu_getInstance()), cmd_menu_fetch_builtin_levels_getInstance()];
      else
        tmp$_2 = [];
    }
     else if (Kotlin.isType(ast, appst_menu)) {
      if (Kotlin.isType(stim, stls_menu_levels_fetched))
        tmp$_2 = [cmd_menu_populate_getInstance()];
      else if (Kotlin.isType(stim, stls_menu_level_selected))
        tmp$_2 = [new cmd_menu_select_level(stim.li), new cmd_select_ui(ui_game_getInstance()), new cmd_game_timer(tc_reset_getInstance()), new cmd_game_timer(tc_run_getInstance()), new cmd_set_state(new appst_game(false)), cmd_game_init_replay_getInstance()];
      else if (Kotlin.isType(stim, stls_menu_designer))
        tmp$_2 = [new cmd_set_state(appst_designer_getInstance()), new cmd_select_ui(ui_designer_getInstance()), cmd_transfer_to_designer_getInstance()];
      else
        tmp$_2 = [];
    }
     else if (Kotlin.isType(ast, appst_game)) {
      tmp$ = ast.paused;
      if (tmp$ === false) {
        if (Kotlin.isType(stim, stls_game_tick))
          tmp$_2 = [cmd_game_fuel_tick_getInstance()];
        else if (Kotlin.isType(stim, stls_game_pause)) {
          tmp$_0 = stim.pause;
          if (tmp$_0 === true)
            tmp$_2 = [new cmd_game_timer(tc_pause_getInstance()), new cmd_set_state(new appst_game(is_paused_true))];
          else if (tmp$_0 === false)
            tmp$_2 = [];
          else
            tmp$_2 = Kotlin.noWhenBranchMatched();
        }
         else if (Kotlin.isType(stim, stls_game_moved))
          tmp$_2 = [new cmd_game_process_move(stim.m)];
        else if (Kotlin.isType(stim, stls_game_victory))
          tmp$_2 = [new cmd_set_state(new appst_postgame(is_victorious_true)), new cmd_game_finish_replay(is_victorious_true), new cmd_game_timer(tc_stop_getInstance()), new cmd_postgame_set_theme(is_victorious_true), new cmd_select_ui(ui_postgame_getInstance()), cmd_postgame_prepare_replay_getInstance()];
        else if (Kotlin.isType(stim, stls_game_fuel_empty))
          tmp$_2 = [new cmd_set_state(new appst_postgame(is_victorious_false)), new cmd_game_finish_replay(is_victorious_false), new cmd_game_timer(tc_stop_getInstance()), new cmd_postgame_set_theme(is_victorious_false), new cmd_select_ui(ui_postgame_getInstance()), cmd_postgame_prepare_replay_getInstance()];
        else if (Kotlin.isType(stim, stls_game_quit))
          tmp$_2 = [new cmd_set_state(new appst_postgame(is_victorious_false)), new cmd_game_finish_replay(null), new cmd_game_timer(tc_stop_getInstance()), new cmd_postgame_set_theme(is_victorious_false), new cmd_select_ui(ui_postgame_getInstance()), cmd_postgame_prepare_replay_getInstance()];
        else
          tmp$_2 = [];
      }
       else if (tmp$ === true) {
        if (Kotlin.isType(stim, stls_game_pause)) {
          tmp$_1 = stim.pause;
          if (tmp$_1 === false)
            tmp$_2 = [new cmd_game_timer(tc_run_getInstance()), new cmd_set_state(new appst_game(is_paused_false))];
          else if (tmp$_1 === true)
            tmp$_2 = [];
          else
            tmp$_2 = Kotlin.noWhenBranchMatched();
        }
         else
          tmp$_2 = [];
      }
       else
        tmp$_2 = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(ast, appst_postgame)) {
      if (Kotlin.isType(stim, stls_postgame_goto_menu))
        tmp$_2 = [new cmd_set_state(appst_menu_getInstance()), new cmd_select_ui(ui_menu_getInstance())];
      else if (Kotlin.isType(stim, stls_postgame_play_again))
        tmp$_2 = [cmd_postgame_reset_map_getInstance(), new cmd_set_state(new appst_game(is_paused_false)), new cmd_game_timer(tc_reset_getInstance()), new cmd_game_timer(tc_run_getInstance()), new cmd_select_ui(ui_game_getInstance()), cmd_game_init_replay_getInstance()];
      else if (Kotlin.isType(stim, stls_postgame_download_replay))
        tmp$_2 = [cmd_postgame_offer_replay_download_getInstance()];
      else
        tmp$_2 = [];
    }
     else if (Kotlin.isType(ast, appst_designer)) {
      if (Kotlin.isType(stim, stls_back_from_designer))
        tmp$_2 = [new cmd_set_state(appst_menu_getInstance()), new cmd_select_ui(ui_menu_getInstance())];
      else
        tmp$_2 = [];
    }
     else
      tmp$_2 = [];
    return tmp$_2;
  }
  function level(board, tick_interval, max_fuel, starting_fuel, _key_fuel, _door_keys, tick_cost, move_cost, name) {
    this.board = board;
    this.tick_interval = tick_interval;
    this.max_fuel = max_fuel;
    this.starting_fuel = starting_fuel;
    this._key_fuel = _key_fuel;
    this._door_keys = _door_keys;
    this.tick_cost = tick_cost;
    this.move_cost = move_cost;
    this.name = name;
  }
  level.prototype.key_fuel_ewn8ib$ = function (c) {
    var tmp$;
    return (tmp$ = this._key_fuel.get_11rb$(c)) != null ? tmp$ : new game_fuel(0);
  };
  level.prototype.door_keys_ewn8ib$ = function (c) {
    var tmp$;
    return (tmp$ = this._door_keys.get_11rb$(c)) != null ? tmp$ : 1;
  };
  level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'level',
    interfaces: []
  };
  level.prototype.component1 = function () {
    return this.board;
  };
  level.prototype.component2 = function () {
    return this.tick_interval;
  };
  level.prototype.component3 = function () {
    return this.max_fuel;
  };
  level.prototype.component4 = function () {
    return this.starting_fuel;
  };
  level.prototype.component5 = function () {
    return this._key_fuel;
  };
  level.prototype.component6 = function () {
    return this._door_keys;
  };
  level.prototype.component7 = function () {
    return this.tick_cost;
  };
  level.prototype.component8 = function () {
    return this.move_cost;
  };
  level.prototype.component9 = function () {
    return this.name;
  };
  level.prototype.copy_d1913u$ = function (board, tick_interval, max_fuel, starting_fuel, _key_fuel, _door_keys, tick_cost, move_cost, name) {
    return new level(board === void 0 ? this.board : board, tick_interval === void 0 ? this.tick_interval : tick_interval, max_fuel === void 0 ? this.max_fuel : max_fuel, starting_fuel === void 0 ? this.starting_fuel : starting_fuel, _key_fuel === void 0 ? this._key_fuel : _key_fuel, _door_keys === void 0 ? this._door_keys : _door_keys, tick_cost === void 0 ? this.tick_cost : tick_cost, move_cost === void 0 ? this.move_cost : move_cost, name === void 0 ? this.name : name);
  };
  level.prototype.toString = function () {
    return 'level(board=' + Kotlin.toString(this.board) + (', tick_interval=' + Kotlin.toString(this.tick_interval)) + (', max_fuel=' + Kotlin.toString(this.max_fuel)) + (', starting_fuel=' + Kotlin.toString(this.starting_fuel)) + (', _key_fuel=' + Kotlin.toString(this._key_fuel)) + (', _door_keys=' + Kotlin.toString(this._door_keys)) + (', tick_cost=' + Kotlin.toString(this.tick_cost)) + (', move_cost=' + Kotlin.toString(this.move_cost)) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  level.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.board) | 0;
    result = result * 31 + Kotlin.hashCode(this.tick_interval) | 0;
    result = result * 31 + Kotlin.hashCode(this.max_fuel) | 0;
    result = result * 31 + Kotlin.hashCode(this.starting_fuel) | 0;
    result = result * 31 + Kotlin.hashCode(this._key_fuel) | 0;
    result = result * 31 + Kotlin.hashCode(this._door_keys) | 0;
    result = result * 31 + Kotlin.hashCode(this.tick_cost) | 0;
    result = result * 31 + Kotlin.hashCode(this.move_cost) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  level.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.board, other.board) && Kotlin.equals(this.tick_interval, other.tick_interval) && Kotlin.equals(this.max_fuel, other.max_fuel) && Kotlin.equals(this.starting_fuel, other.starting_fuel) && Kotlin.equals(this._key_fuel, other._key_fuel) && Kotlin.equals(this._door_keys, other._door_keys) && Kotlin.equals(this.tick_cost, other.tick_cost) && Kotlin.equals(this.move_cost, other.move_cost) && Kotlin.equals(this.name, other.name)))));
  };
  function designer_mode() {
  }
  designer_mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'designer_mode',
    interfaces: []
  };
  function dsm_painting() {
    dsm_painting_instance = this;
    designer_mode.call(this);
  }
  dsm_painting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dsm_painting',
    interfaces: [designer_mode]
  };
  var dsm_painting_instance = null;
  function dsm_painting_getInstance() {
    if (dsm_painting_instance === null) {
      new dsm_painting();
    }
    return dsm_painting_instance;
  }
  function dsm_configuring() {
    dsm_configuring_instance = this;
    designer_mode.call(this);
  }
  dsm_configuring.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dsm_configuring',
    interfaces: [designer_mode]
  };
  var dsm_configuring_instance = null;
  function dsm_configuring_getInstance() {
    if (dsm_configuring_instance === null) {
      new dsm_configuring();
    }
    return dsm_configuring_instance;
  }
  function json_keys(name, ordinal, str) {
    Enum.call(this);
    this.str = str;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function json_keys_initFields() {
    json_keys_initFields = function () {
    };
    json_keys$player_config_instance = new json_keys('player_config', 0, 'player_config');
    json_keys$door_config_instance = new json_keys('door_config', 1, 'door_config');
    json_keys$key_config_instance = new json_keys('key_config', 2, 'key_config');
    json_keys$rows_instance = new json_keys('rows', 3, 'rows');
    json_keys$cols_instance = new json_keys('cols', 4, 'cols');
    json_keys$board_instance = new json_keys('board', 5, 'board');
    json_keys$tick_interval_instance = new json_keys('tick_interval', 6, 'tick_interval');
    json_keys$max_fuel_instance = new json_keys('max_fuel', 7, 'max_fuel');
    json_keys$starting_fuel_instance = new json_keys('starting_fuel', 8, 'starting_fuel');
    json_keys$tick_cost_instance = new json_keys('tick_cost', 9, 'tick_cost');
    json_keys$move_cost_instance = new json_keys('move_cost', 10, 'move_cost');
    json_keys$map_name_instance = new json_keys('map_name', 11, 'name');
    json_keys$key_fuel_instance = new json_keys('key_fuel', 12, 'key_fuel');
    json_keys$door_keys_instance = new json_keys('door_keys', 13, 'door_keys');
  }
  var json_keys$player_config_instance;
  function json_keys$player_config_getInstance() {
    json_keys_initFields();
    return json_keys$player_config_instance;
  }
  var json_keys$door_config_instance;
  function json_keys$door_config_getInstance() {
    json_keys_initFields();
    return json_keys$door_config_instance;
  }
  var json_keys$key_config_instance;
  function json_keys$key_config_getInstance() {
    json_keys_initFields();
    return json_keys$key_config_instance;
  }
  var json_keys$rows_instance;
  function json_keys$rows_getInstance() {
    json_keys_initFields();
    return json_keys$rows_instance;
  }
  var json_keys$cols_instance;
  function json_keys$cols_getInstance() {
    json_keys_initFields();
    return json_keys$cols_instance;
  }
  var json_keys$board_instance;
  function json_keys$board_getInstance() {
    json_keys_initFields();
    return json_keys$board_instance;
  }
  var json_keys$tick_interval_instance;
  function json_keys$tick_interval_getInstance() {
    json_keys_initFields();
    return json_keys$tick_interval_instance;
  }
  var json_keys$max_fuel_instance;
  function json_keys$max_fuel_getInstance() {
    json_keys_initFields();
    return json_keys$max_fuel_instance;
  }
  var json_keys$starting_fuel_instance;
  function json_keys$starting_fuel_getInstance() {
    json_keys_initFields();
    return json_keys$starting_fuel_instance;
  }
  var json_keys$tick_cost_instance;
  function json_keys$tick_cost_getInstance() {
    json_keys_initFields();
    return json_keys$tick_cost_instance;
  }
  var json_keys$move_cost_instance;
  function json_keys$move_cost_getInstance() {
    json_keys_initFields();
    return json_keys$move_cost_instance;
  }
  var json_keys$map_name_instance;
  function json_keys$map_name_getInstance() {
    json_keys_initFields();
    return json_keys$map_name_instance;
  }
  var json_keys$key_fuel_instance;
  function json_keys$key_fuel_getInstance() {
    json_keys_initFields();
    return json_keys$key_fuel_instance;
  }
  var json_keys$door_keys_instance;
  function json_keys$door_keys_getInstance() {
    json_keys_initFields();
    return json_keys$door_keys_instance;
  }
  json_keys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'json_keys',
    interfaces: [Enum]
  };
  function json_keys$values() {
    return [json_keys$player_config_getInstance(), json_keys$door_config_getInstance(), json_keys$key_config_getInstance(), json_keys$rows_getInstance(), json_keys$cols_getInstance(), json_keys$board_getInstance(), json_keys$tick_interval_getInstance(), json_keys$max_fuel_getInstance(), json_keys$starting_fuel_getInstance(), json_keys$tick_cost_getInstance(), json_keys$move_cost_getInstance(), json_keys$map_name_getInstance(), json_keys$key_fuel_getInstance(), json_keys$door_keys_getInstance()];
  }
  json_keys.values = json_keys$values;
  function json_keys$valueOf(name) {
    switch (name) {
      case 'player_config':
        return json_keys$player_config_getInstance();
      case 'door_config':
        return json_keys$door_config_getInstance();
      case 'key_config':
        return json_keys$key_config_getInstance();
      case 'rows':
        return json_keys$rows_getInstance();
      case 'cols':
        return json_keys$cols_getInstance();
      case 'board':
        return json_keys$board_getInstance();
      case 'tick_interval':
        return json_keys$tick_interval_getInstance();
      case 'max_fuel':
        return json_keys$max_fuel_getInstance();
      case 'starting_fuel':
        return json_keys$starting_fuel_getInstance();
      case 'tick_cost':
        return json_keys$tick_cost_getInstance();
      case 'move_cost':
        return json_keys$move_cost_getInstance();
      case 'map_name':
        return json_keys$map_name_getInstance();
      case 'key_fuel':
        return json_keys$key_fuel_getInstance();
      case 'door_keys':
        return json_keys$door_keys_getInstance();
      default:throwISE('No enum constant maze.json_keys.' + name);
    }
  }
  json_keys.valueOf_61zpoe$ = json_keys$valueOf;
  function uget($receiver, key) {
    return $receiver[key.str];
  }
  function uget_0($receiver, key) {
    return $receiver[key];
  }
  function coord_key(c) {
    return c.row.toString() + '_' + c.col;
  }
  function coord_key_0(row, col) {
    return row.toString() + '_' + col;
  }
  function loc_to_decor_cls(l) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(l, loc_empty))
      tmp$_0 = 'location loc_empty';
    else if (Kotlin.isType(l, loc_player))
      tmp$_0 = 'location loc_player';
    else if (Kotlin.isType(l, loc_wall))
      tmp$_0 = 'location loc_wall';
    else if (Kotlin.isType(l, loc_key))
      tmp$_0 = 'location loc_key';
    else if (Kotlin.isType(l, loc_door)) {
      tmp$ = l.opened;
      if (tmp$ === true)
        tmp$_0 = 'location loc_door_open';
      else if (tmp$ === false)
        tmp$_0 = 'location loc_door_closed';
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
    }
     else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return tmp$_0;
  }
  function loc_to_string(l) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(l, loc_empty))
      tmp$_0 = 'e';
    else if (Kotlin.isType(l, loc_player))
      tmp$_0 = 'p';
    else if (Kotlin.isType(l, loc_wall))
      tmp$_0 = 'w';
    else if (Kotlin.isType(l, loc_key))
      tmp$_0 = 'k';
    else if (Kotlin.isType(l, loc_door)) {
      tmp$ = l.opened;
      if (tmp$ === true)
        tmp$_0 = 'o';
      else if (tmp$ === false)
        tmp$_0 = 'c';
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
    }
     else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return tmp$_0;
  }
  function string_to_loc(s) {
    var tmp$;
    if (equals(s, 'e'))
      tmp$ = loc_empty_getInstance();
    else if (equals(s, 'p'))
      tmp$ = loc_player_getInstance();
    else if (equals(s, 'w'))
      tmp$ = loc_wall_getInstance();
    else if (equals(s, 'k'))
      tmp$ = loc_key_getInstance();
    else if (equals(s, 'o'))
      tmp$ = new loc_door(true);
    else if (equals(s, 'c'))
      tmp$ = new loc_door(false);
    else
      tmp$ = loc_wall_getInstance();
    return tmp$;
  }
  function json_to_map(rows, cols, raw_board) {
    var board = ArrayList_init();
    var ir = 0;
    while (ir < rows) {
      var row = ArrayList_init();
      var ic = 0;
      while (ic < cols) {
        row.add_11rb$(string_to_loc(uget_0(raw_board, coord_key_0(ir, ic))));
        ic = ic + 1 | 0;
      }
      board.add_11rb$(row);
      ir = ir + 1 | 0;
    }
    return board;
  }
  function map_to_json(board) {
    var tmp$, tmp$_0;
    var result = JSON.parse('{}');
    tmp$ = withIndex(board).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var ir = tmp$_1.component1()
      , row = tmp$_1.component2();
      tmp$_0 = withIndex(row).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var ic = tmp$_2.component1()
        , loc = tmp$_2.component2();
        result[coord_key_0(ir, ic)] = loc_to_string(loc);
      }
    }
    return result;
  }
  function json_to_coord_hash(rows, cols, raw, handler) {
    var ir = 0;
    while (ir < rows) {
      var ic = 0;
      while (ic < cols) {
        handler(new coords(ir, ic), raw[coord_key_0(ir, ic)]);
        ic = ic + 1 | 0;
      }
      ir = ir + 1 | 0;
    }
  }
  function player_config_tile(tick_interval, max_fuel, starting_fuel, tick_cost, move_cost, name) {
    this.tick_interval = tick_interval;
    this.max_fuel = max_fuel;
    this.starting_fuel = starting_fuel;
    this.tick_cost = tick_cost;
    this.move_cost = move_cost;
    this.name = name;
  }
  player_config_tile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'player_config_tile',
    interfaces: []
  };
  player_config_tile.prototype.component1 = function () {
    return this.tick_interval;
  };
  player_config_tile.prototype.component2 = function () {
    return this.max_fuel;
  };
  player_config_tile.prototype.component3 = function () {
    return this.starting_fuel;
  };
  player_config_tile.prototype.component4 = function () {
    return this.tick_cost;
  };
  player_config_tile.prototype.component5 = function () {
    return this.move_cost;
  };
  player_config_tile.prototype.component6 = function () {
    return this.name;
  };
  player_config_tile.prototype.copy_2x3seo$ = function (tick_interval, max_fuel, starting_fuel, tick_cost, move_cost, name) {
    return new player_config_tile(tick_interval === void 0 ? this.tick_interval : tick_interval, max_fuel === void 0 ? this.max_fuel : max_fuel, starting_fuel === void 0 ? this.starting_fuel : starting_fuel, tick_cost === void 0 ? this.tick_cost : tick_cost, move_cost === void 0 ? this.move_cost : move_cost, name === void 0 ? this.name : name);
  };
  player_config_tile.prototype.toString = function () {
    return 'player_config_tile(tick_interval=' + Kotlin.toString(this.tick_interval) + (', max_fuel=' + Kotlin.toString(this.max_fuel)) + (', starting_fuel=' + Kotlin.toString(this.starting_fuel)) + (', tick_cost=' + Kotlin.toString(this.tick_cost)) + (', move_cost=' + Kotlin.toString(this.move_cost)) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  player_config_tile.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tick_interval) | 0;
    result = result * 31 + Kotlin.hashCode(this.max_fuel) | 0;
    result = result * 31 + Kotlin.hashCode(this.starting_fuel) | 0;
    result = result * 31 + Kotlin.hashCode(this.tick_cost) | 0;
    result = result * 31 + Kotlin.hashCode(this.move_cost) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  player_config_tile.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tick_interval, other.tick_interval) && Kotlin.equals(this.max_fuel, other.max_fuel) && Kotlin.equals(this.starting_fuel, other.starting_fuel) && Kotlin.equals(this.tick_cost, other.tick_cost) && Kotlin.equals(this.move_cost, other.move_cost) && Kotlin.equals(this.name, other.name)))));
  };
  function json_to_player_config_tile(raw) {
    var tick_interval = uget(raw, json_keys$tick_interval_getInstance());
    var max_fuel = uget(raw, json_keys$max_fuel_getInstance());
    var starting_fuel = uget(raw, json_keys$starting_fuel_getInstance());
    var tick_cost = uget(raw, json_keys$tick_cost_getInstance());
    var move_cost = uget(raw, json_keys$move_cost_getInstance());
    var name = uget(raw, json_keys$map_name_getInstance());
    return new player_config_tile(tick_interval, max_fuel, starting_fuel, tick_cost, move_cost, name);
  }
  function player_config_tile_to_json(obj) {
    return json([new Pair(json_keys$tick_interval_getInstance().str, obj.tick_interval), new Pair(json_keys$max_fuel_getInstance().str, obj.max_fuel), new Pair(json_keys$starting_fuel_getInstance().str, obj.starting_fuel), new Pair(json_keys$tick_cost_getInstance().str, obj.tick_cost), new Pair(json_keys$move_cost_getInstance().str, obj.move_cost), new Pair(json_keys$map_name_getInstance().str, obj.name)]);
  }
  function json_to_level$lambda(closure$_key_fuel) {
    return function (c, v) {
      closure$_key_fuel.put_xwzc9p$(c, new game_fuel(v));
      return Unit;
    };
  }
  function json_to_level$lambda_0(closure$_door_keys) {
    return function (c, v) {
      closure$_door_keys.put_xwzc9p$(c, v);
      return Unit;
    };
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function json_to_level(raw) {
    var player_config = uget(raw, json_keys$player_config_getInstance());
    var door_config = uget(raw, json_keys$door_config_getInstance());
    var key_config = uget(raw, json_keys$key_config_getInstance());
    var _key_fuel = HashMap_init();
    var _door_keys = HashMap_init();
    var rows = uget(raw, json_keys$rows_getInstance());
    var cols = uget(raw, json_keys$cols_getInstance());
    var raw_board = uget(raw, json_keys$board_getInstance());
    var board = json_to_map(rows, cols, raw_board);
    json_to_coord_hash(rows, cols, key_config, json_to_level$lambda(_key_fuel));
    json_to_coord_hash(rows, cols, door_config, json_to_level$lambda_0(_door_keys));
    if (loc_map_valid(board)) {
      var src = board_find(board, loc_player_getInstance());
      var conf = uget_0(player_config, coord_key(src));
      var pct = json_to_player_config_tile(conf);
      return new level(board, pct.tick_interval, new game_fuel(pct.max_fuel), new game_fuel(pct.starting_fuel), _key_fuel, _door_keys, new game_fuel(pct.tick_cost), new game_fuel(pct.move_cost), pct.name);
    }
    return demo_level;
  }
  function existing_level(raw_data) {
    this.raw_data = raw_data;
    this.rows = 0;
    this.cols = 0;
    this.key_fuel_int = HashMap_init();
    this.door_keys_int = HashMap_init();
    this.player_config = HashMap_init();
    this.board = ArrayList_init();
  }
  existing_level.prototype.setup_vux9f0$ = function (r, c) {
    this.rows = r;
    this.cols = c;
    this.key_fuel_int = HashMap_init();
    this.door_keys_int = HashMap_init();
    this.player_config = HashMap_init();
    this.board = ArrayList_init();
    var ir = 0;
    while (ir < this.rows) {
      var ic = 0;
      var row = ArrayList_init();
      this.board.add_11rb$(row);
      while (ic < this.cols) {
        row.add_11rb$(loc_empty_getInstance());
        ic = ic + 1 | 0;
      }
      ir = ir + 1 | 0;
    }
  };
  function existing_level$verify$lambda(this$existing_level) {
    return function (c, v) {
      if (!R.isNil(v)) {
        this$existing_level.key_fuel_int.put_xwzc9p$(c, v);
      }
      return Unit;
    };
  }
  function existing_level$verify$lambda_0(this$existing_level) {
    return function (c, v) {
      if (!R.isNil(v)) {
        this$existing_level.door_keys_int.put_xwzc9p$(c, v);
      }
      return Unit;
    };
  }
  function existing_level$verify$lambda_1(this$existing_level) {
    return function (c, v) {
      if (!R.isNil(v)) {
        this$existing_level.player_config.put_xwzc9p$(c, json_to_player_config_tile(v));
      }
      return Unit;
    };
  }
  existing_level.prototype.verify = function () {
    try {
      var raw = JSON.parse(this.raw_data);
      this.rows = uget(raw, json_keys$rows_getInstance());
      this.cols = uget(raw, json_keys$cols_getInstance());
      this.board = json_to_map(this.rows, this.cols, uget(raw, json_keys$board_getInstance()));
      if (!loc_map_valid(this.board)) {
        return false;
      }
      this.key_fuel_int = HashMap_init();
      json_to_coord_hash(this.rows, this.cols, uget(raw, json_keys$key_fuel_getInstance()), existing_level$verify$lambda(this));
      this.door_keys_int = HashMap_init();
      json_to_coord_hash(this.rows, this.cols, uget(raw, json_keys$door_keys_getInstance()), existing_level$verify$lambda_0(this));
      this.player_config = HashMap_init();
      json_to_coord_hash(this.rows, this.cols, uget(raw, json_keys$player_config_getInstance()), existing_level$verify$lambda_1(this));
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return false;
      }
       else
        throw e;
    }
  };
  existing_level.prototype.prepare_json = function () {
    var tmp$, tmp$_0, tmp$_1;
    var board_json = map_to_json(this.board);
    var key_fuel_int_json = json([]);
    var door_keys_int_json = json([]);
    var player_config_json = json([]);
    tmp$ = this.key_fuel_int.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var k = tmp$_2.key;
      var v = tmp$_2.value;
      key_fuel_int_json[coord_key(k)] = v;
    }
    tmp$_0 = this.door_keys_int.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_3 = tmp$_0.next();
      var k_0 = tmp$_3.key;
      var v_0 = tmp$_3.value;
      door_keys_int_json[coord_key(k_0)] = v_0;
    }
    tmp$_1 = this.player_config.entries.iterator();
    while (tmp$_1.hasNext()) {
      var tmp$_4 = tmp$_1.next();
      var k_1 = tmp$_4.key;
      var v_1 = tmp$_4.value;
      player_config_json[coord_key(k_1)] = v_1;
    }
    return json([new Pair(json_keys$rows_getInstance().str, this.rows), new Pair(json_keys$cols_getInstance().str, this.cols), new Pair(json_keys$board_getInstance().str, board_json), new Pair(json_keys$key_fuel_getInstance().str, key_fuel_int_json), new Pair(json_keys$door_keys_getInstance().str, door_keys_int_json), new Pair(json_keys$player_config_getInstance().str, player_config_json)]);
  };
  existing_level.prototype.make_level = function () {
    var tmp$, tmp$_0, tmp$_1;
    var src = board_find(this.board, loc_player_getInstance());
    var conf = (tmp$ = this.player_config.get_11rb$(src)) != null ? tmp$ : new player_config_tile(1000.0, 1000, 800, 5, 20, 'Tobor, The Robot');
    var key_fuel = HashMap_init();
    var door_keys = HashMap_init();
    tmp$_0 = this.key_fuel_int.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_2 = tmp$_0.next();
      var k = tmp$_2.key;
      var v = tmp$_2.value;
      key_fuel.put_xwzc9p$(k, new game_fuel(v));
    }
    tmp$_1 = this.door_keys_int.entries.iterator();
    while (tmp$_1.hasNext()) {
      var tmp$_3 = tmp$_1.next();
      var k_0 = tmp$_3.key;
      var v_0 = tmp$_3.value;
      door_keys.put_xwzc9p$(k_0, v_0);
    }
    return new level(this.board, conf.tick_interval, new game_fuel(conf.max_fuel), new game_fuel(conf.starting_fuel), key_fuel, door_keys, new game_fuel(conf.tick_cost), new game_fuel(conf.move_cost), conf.name);
  };
  existing_level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'existing_level',
    interfaces: []
  };
  function designer_stimulus() {
  }
  designer_stimulus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'designer_stimulus',
    interfaces: []
  };
  function ds_started() {
    ds_started_instance = this;
    designer_stimulus.call(this);
  }
  ds_started.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ds_started',
    interfaces: [designer_stimulus]
  };
  var ds_started_instance = null;
  function ds_started_getInstance() {
    if (ds_started_instance === null) {
      new ds_started();
    }
    return ds_started_instance;
  }
  function ds_new() {
    ds_new_instance = this;
    designer_stimulus.call(this);
  }
  ds_new.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ds_new',
    interfaces: [designer_stimulus]
  };
  var ds_new_instance = null;
  function ds_new_getInstance() {
    if (ds_new_instance === null) {
      new ds_new();
    }
    return ds_new_instance;
  }
  function ds_existing(lvl) {
    designer_stimulus.call(this);
    this.lvl = lvl;
  }
  ds_existing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_existing',
    interfaces: [designer_stimulus]
  };
  ds_existing.prototype.component1 = function () {
    return this.lvl;
  };
  ds_existing.prototype.copy_nilwkh$ = function (lvl) {
    return new ds_existing(lvl === void 0 ? this.lvl : lvl);
  };
  ds_existing.prototype.toString = function () {
    return 'ds_existing(lvl=' + Kotlin.toString(this.lvl) + ')';
  };
  ds_existing.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lvl) | 0;
    return result;
  };
  ds_existing.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.lvl, other.lvl))));
  };
  function ds_existing_verified(success) {
    designer_stimulus.call(this);
    this.success = success;
  }
  ds_existing_verified.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_existing_verified',
    interfaces: [designer_stimulus]
  };
  ds_existing_verified.prototype.component1 = function () {
    return this.success;
  };
  ds_existing_verified.prototype.copy_6taknv$ = function (success) {
    return new ds_existing_verified(success === void 0 ? this.success : success);
  };
  ds_existing_verified.prototype.toString = function () {
    return 'ds_existing_verified(success=' + Kotlin.toString(this.success) + ')';
  };
  ds_existing_verified.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.success) | 0;
    return result;
  };
  ds_existing_verified.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.success, other.success))));
  };
  function ds_map_size_specified(rows, cols) {
    designer_stimulus.call(this);
    this.rows = rows;
    this.cols = cols;
  }
  ds_map_size_specified.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_map_size_specified',
    interfaces: [designer_stimulus]
  };
  ds_map_size_specified.prototype.component1 = function () {
    return this.rows;
  };
  ds_map_size_specified.prototype.component2 = function () {
    return this.cols;
  };
  ds_map_size_specified.prototype.copy_vux9f0$ = function (rows, cols) {
    return new ds_map_size_specified(rows === void 0 ? this.rows : rows, cols === void 0 ? this.cols : cols);
  };
  ds_map_size_specified.prototype.toString = function () {
    return 'ds_map_size_specified(rows=' + Kotlin.toString(this.rows) + (', cols=' + Kotlin.toString(this.cols)) + ')';
  };
  ds_map_size_specified.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rows) | 0;
    result = result * 31 + Kotlin.hashCode(this.cols) | 0;
    return result;
  };
  ds_map_size_specified.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rows, other.rows) && Kotlin.equals(this.cols, other.cols)))));
  };
  function ds_quit() {
    ds_quit_instance = this;
    designer_stimulus.call(this);
  }
  ds_quit.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ds_quit',
    interfaces: [designer_stimulus]
  };
  var ds_quit_instance = null;
  function ds_quit_getInstance() {
    if (ds_quit_instance === null) {
      new ds_quit();
    }
    return ds_quit_instance;
  }
  function ds_canvas_mouse_down(c) {
    designer_stimulus.call(this);
    this.c = c;
  }
  ds_canvas_mouse_down.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_canvas_mouse_down',
    interfaces: [designer_stimulus]
  };
  ds_canvas_mouse_down.prototype.component1 = function () {
    return this.c;
  };
  ds_canvas_mouse_down.prototype.copy_ewn8ib$ = function (c) {
    return new ds_canvas_mouse_down(c === void 0 ? this.c : c);
  };
  ds_canvas_mouse_down.prototype.toString = function () {
    return 'ds_canvas_mouse_down(c=' + Kotlin.toString(this.c) + ')';
  };
  ds_canvas_mouse_down.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  ds_canvas_mouse_down.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function ds_canvas_mouse_in(c) {
    designer_stimulus.call(this);
    this.c = c;
  }
  ds_canvas_mouse_in.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_canvas_mouse_in',
    interfaces: [designer_stimulus]
  };
  ds_canvas_mouse_in.prototype.component1 = function () {
    return this.c;
  };
  ds_canvas_mouse_in.prototype.copy_ewn8ib$ = function (c) {
    return new ds_canvas_mouse_in(c === void 0 ? this.c : c);
  };
  ds_canvas_mouse_in.prototype.toString = function () {
    return 'ds_canvas_mouse_in(c=' + Kotlin.toString(this.c) + ')';
  };
  ds_canvas_mouse_in.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  ds_canvas_mouse_in.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function ds_canvas_mouse_up() {
    ds_canvas_mouse_up_instance = this;
    designer_stimulus.call(this);
  }
  ds_canvas_mouse_up.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ds_canvas_mouse_up',
    interfaces: [designer_stimulus]
  };
  var ds_canvas_mouse_up_instance = null;
  function ds_canvas_mouse_up_getInstance() {
    if (ds_canvas_mouse_up_instance === null) {
      new ds_canvas_mouse_up();
    }
    return ds_canvas_mouse_up_instance;
  }
  function ds_brush_click(l) {
    designer_stimulus.call(this);
    this.l = l;
  }
  ds_brush_click.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_brush_click',
    interfaces: [designer_stimulus]
  };
  ds_brush_click.prototype.component1 = function () {
    return this.l;
  };
  ds_brush_click.prototype.copy_7uyvp8$ = function (l) {
    return new ds_brush_click(l === void 0 ? this.l : l);
  };
  ds_brush_click.prototype.toString = function () {
    return 'ds_brush_click(l=' + Kotlin.toString(this.l) + ')';
  };
  ds_brush_click.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    return result;
  };
  ds_brush_click.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.l, other.l))));
  };
  function ds_mode_picked(m) {
    designer_stimulus.call(this);
    this.m = m;
  }
  ds_mode_picked.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_mode_picked',
    interfaces: [designer_stimulus]
  };
  ds_mode_picked.prototype.component1 = function () {
    return this.m;
  };
  ds_mode_picked.prototype.copy_1k607c$ = function (m) {
    return new ds_mode_picked(m === void 0 ? this.m : m);
  };
  ds_mode_picked.prototype.toString = function () {
    return 'ds_mode_picked(m=' + Kotlin.toString(this.m) + ')';
  };
  ds_mode_picked.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.m) | 0;
    return result;
  };
  ds_mode_picked.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.m, other.m))));
  };
  function ds_done() {
    ds_done_instance = this;
    designer_stimulus.call(this);
  }
  ds_done.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ds_done',
    interfaces: [designer_stimulus]
  };
  var ds_done_instance = null;
  function ds_done_getInstance() {
    if (ds_done_instance === null) {
      new ds_done();
    }
    return ds_done_instance;
  }
  function ds_editing_verified(bv) {
    designer_stimulus.call(this);
    this.bv = bv;
  }
  ds_editing_verified.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ds_editing_verified',
    interfaces: [designer_stimulus]
  };
  ds_editing_verified.prototype.component1 = function () {
    return this.bv;
  };
  ds_editing_verified.prototype.copy_6taknv$ = function (bv) {
    return new ds_editing_verified(bv === void 0 ? this.bv : bv);
  };
  ds_editing_verified.prototype.toString = function () {
    return 'ds_editing_verified(bv=' + Kotlin.toString(this.bv) + ')';
  };
  ds_editing_verified.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bv) | 0;
    return result;
  };
  ds_editing_verified.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bv, other.bv))));
  };
  function ds_download() {
    ds_download_instance = this;
    designer_stimulus.call(this);
  }
  ds_download.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ds_download',
    interfaces: [designer_stimulus]
  };
  var ds_download_instance = null;
  function ds_download_getInstance() {
    if (ds_download_instance === null) {
      new ds_download();
    }
    return ds_download_instance;
  }
  function ds_add_to_menu() {
    ds_add_to_menu_instance = this;
    designer_stimulus.call(this);
  }
  ds_add_to_menu.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ds_add_to_menu',
    interfaces: [designer_stimulus]
  };
  var ds_add_to_menu_instance = null;
  function ds_add_to_menu_getInstance() {
    if (ds_add_to_menu_instance === null) {
      new ds_add_to_menu();
    }
    return ds_add_to_menu_instance;
  }
  function designer_command() {
  }
  designer_command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'designer_command',
    interfaces: []
  };
  function dcmd_show_new_or_existing() {
    dcmd_show_new_or_existing_instance = this;
    designer_command.call(this);
  }
  dcmd_show_new_or_existing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_show_new_or_existing',
    interfaces: [designer_command]
  };
  var dcmd_show_new_or_existing_instance = null;
  function dcmd_show_new_or_existing_getInstance() {
    if (dcmd_show_new_or_existing_instance === null) {
      new dcmd_show_new_or_existing();
    }
    return dcmd_show_new_or_existing_instance;
  }
  function dcmd_verify_dropped_file(lvl) {
    designer_command.call(this);
    this.lvl = lvl;
  }
  dcmd_verify_dropped_file.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_verify_dropped_file',
    interfaces: [designer_command]
  };
  dcmd_verify_dropped_file.prototype.component1 = function () {
    return this.lvl;
  };
  dcmd_verify_dropped_file.prototype.copy_nilwkh$ = function (lvl) {
    return new dcmd_verify_dropped_file(lvl === void 0 ? this.lvl : lvl);
  };
  dcmd_verify_dropped_file.prototype.toString = function () {
    return 'dcmd_verify_dropped_file(lvl=' + Kotlin.toString(this.lvl) + ')';
  };
  dcmd_verify_dropped_file.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lvl) | 0;
    return result;
  };
  dcmd_verify_dropped_file.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.lvl, other.lvl))));
  };
  function dcmd_load_dropped_file() {
    dcmd_load_dropped_file_instance = this;
    designer_command.call(this);
  }
  dcmd_load_dropped_file.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_load_dropped_file',
    interfaces: [designer_command]
  };
  var dcmd_load_dropped_file_instance = null;
  function dcmd_load_dropped_file_getInstance() {
    if (dcmd_load_dropped_file_instance === null) {
      new dcmd_load_dropped_file();
    }
    return dcmd_load_dropped_file_instance;
  }
  function dcmd_discard_dropped_file() {
    dcmd_discard_dropped_file_instance = this;
    designer_command.call(this);
  }
  dcmd_discard_dropped_file.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_discard_dropped_file',
    interfaces: [designer_command]
  };
  var dcmd_discard_dropped_file_instance = null;
  function dcmd_discard_dropped_file_getInstance() {
    if (dcmd_discard_dropped_file_instance === null) {
      new dcmd_discard_dropped_file();
    }
    return dcmd_discard_dropped_file_instance;
  }
  function dcmd_show_size_picker() {
    dcmd_show_size_picker_instance = this;
    designer_command.call(this);
  }
  dcmd_show_size_picker.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_show_size_picker',
    interfaces: [designer_command]
  };
  var dcmd_show_size_picker_instance = null;
  function dcmd_show_size_picker_getInstance() {
    if (dcmd_show_size_picker_instance === null) {
      new dcmd_show_size_picker();
    }
    return dcmd_show_size_picker_instance;
  }
  function dcmd_load_new_file(rows, cols) {
    designer_command.call(this);
    this.rows = rows;
    this.cols = cols;
  }
  dcmd_load_new_file.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_load_new_file',
    interfaces: [designer_command]
  };
  dcmd_load_new_file.prototype.component1 = function () {
    return this.rows;
  };
  dcmd_load_new_file.prototype.component2 = function () {
    return this.cols;
  };
  dcmd_load_new_file.prototype.copy_vux9f0$ = function (rows, cols) {
    return new dcmd_load_new_file(rows === void 0 ? this.rows : rows, cols === void 0 ? this.cols : cols);
  };
  dcmd_load_new_file.prototype.toString = function () {
    return 'dcmd_load_new_file(rows=' + Kotlin.toString(this.rows) + (', cols=' + Kotlin.toString(this.cols)) + ')';
  };
  dcmd_load_new_file.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rows) | 0;
    result = result * 31 + Kotlin.hashCode(this.cols) | 0;
    return result;
  };
  dcmd_load_new_file.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rows, other.rows) && Kotlin.equals(this.cols, other.cols)))));
  };
  function dcmd_back_to_menu() {
    dcmd_back_to_menu_instance = this;
    designer_command.call(this);
  }
  dcmd_back_to_menu.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_back_to_menu',
    interfaces: [designer_command]
  };
  var dcmd_back_to_menu_instance = null;
  function dcmd_back_to_menu_getInstance() {
    if (dcmd_back_to_menu_instance === null) {
      new dcmd_back_to_menu();
    }
    return dcmd_back_to_menu_instance;
  }
  function dcmd_activate_painting(bv) {
    designer_command.call(this);
    this.bv = bv;
  }
  dcmd_activate_painting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_activate_painting',
    interfaces: [designer_command]
  };
  dcmd_activate_painting.prototype.component1 = function () {
    return this.bv;
  };
  dcmd_activate_painting.prototype.copy_6taknv$ = function (bv) {
    return new dcmd_activate_painting(bv === void 0 ? this.bv : bv);
  };
  dcmd_activate_painting.prototype.toString = function () {
    return 'dcmd_activate_painting(bv=' + Kotlin.toString(this.bv) + ')';
  };
  dcmd_activate_painting.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bv) | 0;
    return result;
  };
  dcmd_activate_painting.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bv, other.bv))));
  };
  function dcmd_paint_at_coord(c, l) {
    designer_command.call(this);
    this.c = c;
    this.l = l;
  }
  dcmd_paint_at_coord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_paint_at_coord',
    interfaces: [designer_command]
  };
  dcmd_paint_at_coord.prototype.component1 = function () {
    return this.c;
  };
  dcmd_paint_at_coord.prototype.component2 = function () {
    return this.l;
  };
  dcmd_paint_at_coord.prototype.copy_vfdyyj$ = function (c, l) {
    return new dcmd_paint_at_coord(c === void 0 ? this.c : c, l === void 0 ? this.l : l);
  };
  dcmd_paint_at_coord.prototype.toString = function () {
    return 'dcmd_paint_at_coord(c=' + Kotlin.toString(this.c) + (', l=' + Kotlin.toString(this.l)) + ')';
  };
  dcmd_paint_at_coord.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    return result;
  };
  dcmd_paint_at_coord.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.c, other.c) && Kotlin.equals(this.l, other.l)))));
  };
  function dcmd_pick_brush(l) {
    designer_command.call(this);
    this.l = l;
  }
  dcmd_pick_brush.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_pick_brush',
    interfaces: [designer_command]
  };
  dcmd_pick_brush.prototype.component1 = function () {
    return this.l;
  };
  dcmd_pick_brush.prototype.copy_7uyvp8$ = function (l) {
    return new dcmd_pick_brush(l === void 0 ? this.l : l);
  };
  dcmd_pick_brush.prototype.toString = function () {
    return 'dcmd_pick_brush(l=' + Kotlin.toString(this.l) + ')';
  };
  dcmd_pick_brush.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    return result;
  };
  dcmd_pick_brush.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.l, other.l))));
  };
  function dcmd_enable_brush_picker(bv) {
    designer_command.call(this);
    this.bv = bv;
  }
  dcmd_enable_brush_picker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_enable_brush_picker',
    interfaces: [designer_command]
  };
  dcmd_enable_brush_picker.prototype.component1 = function () {
    return this.bv;
  };
  dcmd_enable_brush_picker.prototype.copy_6taknv$ = function (bv) {
    return new dcmd_enable_brush_picker(bv === void 0 ? this.bv : bv);
  };
  dcmd_enable_brush_picker.prototype.toString = function () {
    return 'dcmd_enable_brush_picker(bv=' + Kotlin.toString(this.bv) + ')';
  };
  dcmd_enable_brush_picker.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bv) | 0;
    return result;
  };
  dcmd_enable_brush_picker.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bv, other.bv))));
  };
  function dcmd_hide_config() {
    dcmd_hide_config_instance = this;
    designer_command.call(this);
  }
  dcmd_hide_config.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_hide_config',
    interfaces: [designer_command]
  };
  var dcmd_hide_config_instance = null;
  function dcmd_hide_config_getInstance() {
    if (dcmd_hide_config_instance === null) {
      new dcmd_hide_config();
    }
    return dcmd_hide_config_instance;
  }
  function dcmd_show_selection(c) {
    designer_command.call(this);
    this.c = c;
  }
  dcmd_show_selection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_show_selection',
    interfaces: [designer_command]
  };
  dcmd_show_selection.prototype.component1 = function () {
    return this.c;
  };
  dcmd_show_selection.prototype.copy_ewn8ib$ = function (c) {
    return new dcmd_show_selection(c === void 0 ? this.c : c);
  };
  dcmd_show_selection.prototype.toString = function () {
    return 'dcmd_show_selection(c=' + Kotlin.toString(this.c) + ')';
  };
  dcmd_show_selection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  dcmd_show_selection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function dcmd_clear_selection() {
    dcmd_clear_selection_instance = this;
    designer_command.call(this);
  }
  dcmd_clear_selection.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_clear_selection',
    interfaces: [designer_command]
  };
  var dcmd_clear_selection_instance = null;
  function dcmd_clear_selection_getInstance() {
    if (dcmd_clear_selection_instance === null) {
      new dcmd_clear_selection();
    }
    return dcmd_clear_selection_instance;
  }
  function dcmd_showadd_key_config(c) {
    designer_command.call(this);
    this.c = c;
  }
  dcmd_showadd_key_config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_showadd_key_config',
    interfaces: [designer_command]
  };
  dcmd_showadd_key_config.prototype.component1 = function () {
    return this.c;
  };
  dcmd_showadd_key_config.prototype.copy_ewn8ib$ = function (c) {
    return new dcmd_showadd_key_config(c === void 0 ? this.c : c);
  };
  dcmd_showadd_key_config.prototype.toString = function () {
    return 'dcmd_showadd_key_config(c=' + Kotlin.toString(this.c) + ')';
  };
  dcmd_showadd_key_config.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  dcmd_showadd_key_config.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function dcmd_showadd_door_config(c) {
    designer_command.call(this);
    this.c = c;
  }
  dcmd_showadd_door_config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_showadd_door_config',
    interfaces: [designer_command]
  };
  dcmd_showadd_door_config.prototype.component1 = function () {
    return this.c;
  };
  dcmd_showadd_door_config.prototype.copy_ewn8ib$ = function (c) {
    return new dcmd_showadd_door_config(c === void 0 ? this.c : c);
  };
  dcmd_showadd_door_config.prototype.toString = function () {
    return 'dcmd_showadd_door_config(c=' + Kotlin.toString(this.c) + ')';
  };
  dcmd_showadd_door_config.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  dcmd_showadd_door_config.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function dcmd_showadd_map_config(c) {
    designer_command.call(this);
    this.c = c;
  }
  dcmd_showadd_map_config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_showadd_map_config',
    interfaces: [designer_command]
  };
  dcmd_showadd_map_config.prototype.component1 = function () {
    return this.c;
  };
  dcmd_showadd_map_config.prototype.copy_ewn8ib$ = function (c) {
    return new dcmd_showadd_map_config(c === void 0 ? this.c : c);
  };
  dcmd_showadd_map_config.prototype.toString = function () {
    return 'dcmd_showadd_map_config(c=' + Kotlin.toString(this.c) + ')';
  };
  dcmd_showadd_map_config.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  dcmd_showadd_map_config.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  function dcmd_verify_editing() {
    dcmd_verify_editing_instance = this;
    designer_command.call(this);
  }
  dcmd_verify_editing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_verify_editing',
    interfaces: [designer_command]
  };
  var dcmd_verify_editing_instance = null;
  function dcmd_verify_editing_getInstance() {
    if (dcmd_verify_editing_instance === null) {
      new dcmd_verify_editing();
    }
    return dcmd_verify_editing_instance;
  }
  function dcmd_show_map_invalid() {
    dcmd_show_map_invalid_instance = this;
    designer_command.call(this);
  }
  dcmd_show_map_invalid.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_show_map_invalid',
    interfaces: [designer_command]
  };
  var dcmd_show_map_invalid_instance = null;
  function dcmd_show_map_invalid_getInstance() {
    if (dcmd_show_map_invalid_instance === null) {
      new dcmd_show_map_invalid();
    }
    return dcmd_show_map_invalid_instance;
  }
  function dcmd_show_done_screen(bv) {
    designer_command.call(this);
    this.bv = bv;
  }
  dcmd_show_done_screen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'dcmd_show_done_screen',
    interfaces: [designer_command]
  };
  dcmd_show_done_screen.prototype.component1 = function () {
    return this.bv;
  };
  dcmd_show_done_screen.prototype.copy_6taknv$ = function (bv) {
    return new dcmd_show_done_screen(bv === void 0 ? this.bv : bv);
  };
  dcmd_show_done_screen.prototype.toString = function () {
    return 'dcmd_show_done_screen(bv=' + Kotlin.toString(this.bv) + ')';
  };
  dcmd_show_done_screen.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bv) | 0;
    return result;
  };
  dcmd_show_done_screen.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bv, other.bv))));
  };
  function dcmd_prepare_file() {
    dcmd_prepare_file_instance = this;
    designer_command.call(this);
  }
  dcmd_prepare_file.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_prepare_file',
    interfaces: [designer_command]
  };
  var dcmd_prepare_file_instance = null;
  function dcmd_prepare_file_getInstance() {
    if (dcmd_prepare_file_instance === null) {
      new dcmd_prepare_file();
    }
    return dcmd_prepare_file_instance;
  }
  function dcmd_offer_download() {
    dcmd_offer_download_instance = this;
    designer_command.call(this);
  }
  dcmd_offer_download.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_offer_download',
    interfaces: [designer_command]
  };
  var dcmd_offer_download_instance = null;
  function dcmd_offer_download_getInstance() {
    if (dcmd_offer_download_instance === null) {
      new dcmd_offer_download();
    }
    return dcmd_offer_download_instance;
  }
  function dcmd_add_to_menu() {
    dcmd_add_to_menu_instance = this;
    designer_command.call(this);
  }
  dcmd_add_to_menu.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dcmd_add_to_menu',
    interfaces: [designer_command]
  };
  var dcmd_add_to_menu_instance = null;
  function dcmd_add_to_menu_getInstance() {
    if (dcmd_add_to_menu_instance === null) {
      new dcmd_add_to_menu();
    }
    return dcmd_add_to_menu_instance;
  }
  function designer_state() {
  }
  designer_state.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'designer_state',
    interfaces: []
  };
  function dstate_just_started() {
    dstate_just_started_instance = this;
    designer_state.call(this);
  }
  dstate_just_started.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_just_started',
    interfaces: [designer_state]
  };
  var dstate_just_started_instance = null;
  function dstate_just_started_getInstance() {
    if (dstate_just_started_instance === null) {
      new dstate_just_started();
    }
    return dstate_just_started_instance;
  }
  function dstate_file_picking() {
    dstate_file_picking_instance = this;
    designer_state.call(this);
  }
  dstate_file_picking.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_file_picking',
    interfaces: [designer_state]
  };
  var dstate_file_picking_instance = null;
  function dstate_file_picking_getInstance() {
    if (dstate_file_picking_instance === null) {
      new dstate_file_picking();
    }
    return dstate_file_picking_instance;
  }
  function dstate_size_picking() {
    dstate_size_picking_instance = this;
    designer_state.call(this);
  }
  dstate_size_picking.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_size_picking',
    interfaces: [designer_state]
  };
  var dstate_size_picking_instance = null;
  function dstate_size_picking_getInstance() {
    if (dstate_size_picking_instance === null) {
      new dstate_size_picking();
    }
    return dstate_size_picking_instance;
  }
  function dstate_drop_verifying() {
    dstate_drop_verifying_instance = this;
    designer_state.call(this);
  }
  dstate_drop_verifying.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_drop_verifying',
    interfaces: [designer_state]
  };
  var dstate_drop_verifying_instance = null;
  function dstate_drop_verifying_getInstance() {
    if (dstate_drop_verifying_instance === null) {
      new dstate_drop_verifying();
    }
    return dstate_drop_verifying_instance;
  }
  function dstate_painting() {
    dstate_painting_instance = this;
    designer_state.call(this);
  }
  dstate_painting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_painting',
    interfaces: [designer_state]
  };
  var dstate_painting_instance = null;
  function dstate_painting_getInstance() {
    if (dstate_painting_instance === null) {
      new dstate_painting();
    }
    return dstate_painting_instance;
  }
  function dstate_configuring() {
    dstate_configuring_instance = this;
    designer_state.call(this);
  }
  dstate_configuring.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_configuring',
    interfaces: [designer_state]
  };
  var dstate_configuring_instance = null;
  function dstate_configuring_getInstance() {
    if (dstate_configuring_instance === null) {
      new dstate_configuring();
    }
    return dstate_configuring_instance;
  }
  function dstate_edit_verifying() {
    dstate_edit_verifying_instance = this;
    designer_state.call(this);
  }
  dstate_edit_verifying.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_edit_verifying',
    interfaces: [designer_state]
  };
  var dstate_edit_verifying_instance = null;
  function dstate_edit_verifying_getInstance() {
    if (dstate_edit_verifying_instance === null) {
      new dstate_edit_verifying();
    }
    return dstate_edit_verifying_instance;
  }
  function dstate_finalizing() {
    dstate_finalizing_instance = this;
    designer_state.call(this);
  }
  dstate_finalizing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_finalizing',
    interfaces: [designer_state]
  };
  var dstate_finalizing_instance = null;
  function dstate_finalizing_getInstance() {
    if (dstate_finalizing_instance === null) {
      new dstate_finalizing();
    }
    return dstate_finalizing_instance;
  }
  function dstate_exiting() {
    dstate_exiting_instance = this;
    designer_state.call(this);
  }
  dstate_exiting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'dstate_exiting',
    interfaces: [designer_state]
  };
  var dstate_exiting_instance = null;
  function dstate_exiting_getInstance() {
    if (dstate_exiting_instance === null) {
      new dstate_exiting();
    }
    return dstate_exiting_instance;
  }
  var cls_maze_table;
  var demo_level;
  function UiMenu(parent, send) {
    this.container = parent;
    this.send = send;
    this.root = empty_div();
    this.cls_title = 'menu-title';
    this.cls_info = 'menu-info';
    this.cls_levels = 'menu-levels';
    this.cls_level = 'menu-level';
    this.levels = empty_div();
    this.designer = empty_div();
  }
  UiMenu.prototype.hide = function () {
    _discard(this.root.hide());
  };
  UiMenu.prototype.show = function () {
    _discard(this.root.show());
  };
  function UiMenu$setup$lambda(this$UiMenu) {
    return function (it) {
      this$UiMenu.send(stls_menu_designer_getInstance());
      return Unit;
    };
  }
  UiMenu.prototype.setup = function () {
    var info_box = empty_div();
    this.container.append(this.root);
    this.root.append(empty_div().addClass(this.cls_title).text('Main Menu')).append(info_box).append(br()).append(this.levels.addClass(this.cls_levels));
    this.designer.appendTo(this.root);
    ahref().text('Level Designer').appendTo(this.designer).click(UiMenu$setup$lambda(this));
    var helpul = unordered_list().appendTo(info_box);
    list_item().append(span_label(' ').addClass('help loc_player')).append(span_label(' is the player you are controlling.')).appendTo(helpul);
    list_item().append(span_label(' ').addClass('help loc_wall')).append(span_label(' are walls you cant pass through.')).appendTo(helpul);
    list_item().append(span_label(' ').addClass('help loc_door_open')).append(span_label(' are exits you need to reach before fuel runs out.')).appendTo(helpul);
    list_item().append(span_label(' ').addClass('help loc_door_closed')).append(span_label(' are doors to exits which are closed.')).appendTo(helpul);
    list_item().append(span_label(' ').addClass('help loc_key')).append(span_label(' are keys which give you fuel and they open doors.')).appendTo(helpul);
    list_item().append(span_label('Each door has its own number of keys requirement.')).appendTo(helpul);
    list_item().append(span_label('Picking that many keys will open that door.')).appendTo(helpul);
    list_item().append(span_label('Fuel is displayed at top, and it depletes with time, faster if you move.')).appendTo(helpul);
  };
  function UiMenu$populate_levels$lambda(this$UiMenu, closure$i) {
    return function (it) {
      this$UiMenu.send(new stls_menu_level_selected(closure$i));
      return Unit;
    };
  }
  UiMenu.prototype.populate_levels_r2nzix$ = function (ls) {
    var tmp$;
    this.levels.children().remove();
    var ul = unordered_list().appendTo(this.levels);
    tmp$ = withIndex_0(ls).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var i = tmp$_0.component1()
      , l = tmp$_0.component2();
      var link = ahref().addClass(this.cls_level).text(l.name).click(UiMenu$populate_levels$lambda(this, i));
      ul.append(list_item().append(link));
    }
  };
  UiMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UiMenu',
    interfaces: []
  };
  function UiGame(parent, send, current_level) {
    this.container = parent;
    this.send = send;
    this.current_level = current_level;
    this.cls_game = cls_maze_table;
    this.cls_fuel = 'game-fuel';
    this.cls_keys = 'game-keys';
    this.cls_doors = 'game-doors';
    this.root = empty_div();
    this.game_area = empty_div();
    this.fuel_area = empty_div();
    this.current_fuel = empty_div();
    this.keys_found = empty_div();
    this.doors_opened = empty_div();
    this.board = ArrayList_init();
    this.cells = HashMap_init();
    this.src = new coords(0, 0);
  }
  UiGame.prototype.hide = function () {
    _discard(this.root.hide());
  };
  UiGame.prototype.show = function () {
    _discard(this.root.show());
  };
  function UiGame$setup$lambda(this$UiGame) {
    return function (f) {
      this$UiGame.send(stls_game_quit_getInstance());
      return Unit;
    };
  }
  UiGame.prototype.setup = function () {
    this.container.append(this.root);
    this.root.append(this.fuel_area.addClass(this.cls_fuel).append(this.current_fuel)).append(this.game_area).append(br()).append(hr()).append(br()).append(this.keys_found.addClass(this.cls_keys)).append(this.doors_opened.addClass(this.cls_doors));
    empty_button().appendTo(this.root).text('Quit').click(UiGame$setup$lambda(this));
  };
  UiGame.prototype.reset = function () {
    var level = this.current_level();
    this.game_area.children().remove();
    if (level != null) {
      var tmp$, tmp$_0;
      this.set_fuel_vux9f0$(level.starting_fuel.remaining, level.max_fuel.remaining);
      var _board = level.board;
      this.board = copy_loc_map(_board);
      this.src = board_find(_board, loc_player_getInstance());
      this.cells = HashMap_init();
      var t = table().addClass(this.cls_game).appendTo(this.game_area).append(table_head());
      var tb = table_body().appendTo(t);
      tmp$ = withIndex(_board).iterator();
      while (tmp$.hasNext()) {
        var tmp$_1 = tmp$.next();
        var row = tmp$_1.component1()
        , lr = tmp$_1.component2();
        var r = table_row().appendTo(tb);
        tmp$_0 = withIndex(lr).iterator();
        while (tmp$_0.hasNext()) {
          var tmp$_2 = tmp$_0.next();
          var col = tmp$_2.component1()
          , l = tmp$_2.component2();
          var d = table_data().appendTo(r);
          d.attr('class', loc_to_decor_cls(l));
          this.cells.put_xwzc9p$(new coords(row, col), d);
        }
      }
    }
  };
  UiGame.prototype.set_fuel_vux9f0$ = function (curf, mf) {
    var pct = curf * 100.0 / mf;
    this.current_fuel.css('width', pct.toString() + '%');
  };
  UiGame.prototype.update_coords_vfdyyj$ = function (c, l) {
    var lr = this.board.get_za3lpa$(c.row);
    lr.set_wxm5ur$(c.col, l);
    var cell = this.cells.get_11rb$(c);
    if (cell != null) {
      cell.attr('class', loc_to_decor_cls(l));
    }
  };
  UiGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UiGame',
    interfaces: []
  };
  function UiDesigner(parent, send_to_menu, add_to_menu) {
    this.container = parent;
    this.send_to_menu = send_to_menu;
    this.add_to_menu = add_to_menu;
    this.root = empty_div();
    this.painting_activated = false;
    this.current_brush = loc_empty_getInstance();
    this.state = dstate_just_started_getInstance();
    this.file_picker = empty_div();
    this.size_picker = empty_div();
    this.editor = empty_div();
    this.finalizer = empty_div();
    this.new_file_button = empty_button();
    this.input_size_rows = html_input().val('5');
    this.input_size_cols = html_input().val('5');
    this.brush_box = empty_div();
    this.configure_box = empty_div();
    this.to_config = empty_button();
    this.to_painting = empty_button();
    this.editing_done = empty_button();
    this.canvas = empty_div();
    this.level_download_a = jQuery('<a><\/a>').attr('target', '_blank');
    this.canvas_body = table_body();
    this.current_existing = new existing_level('');
    this.config_writer = UiDesigner$config_writer$lambda;
  }
  UiDesigner.prototype.hide = function () {
    _discard(this.root.hide());
  };
  UiDesigner.prototype.show = function () {
    _discard(this.root.show());
  };
  UiDesigner.prototype.board_tile_ewn8ib$ = function (c) {
    return this.current_existing.board.get_za3lpa$(c.row).get_za3lpa$(c.col);
  };
  function UiDesigner$quit_button$lambda(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(ds_quit_getInstance());
      return Unit;
    };
  }
  UiDesigner.prototype.quit_button_61zpoe$ = function (l) {
    if (l === void 0)
      l = 'Quit';
    return empty_button().text(l).click(UiDesigner$quit_button$lambda(this));
  };
  function UiDesigner$setup$lambda(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(ds_new_getInstance());
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_0(this$UiDesigner) {
    return function (f) {
      var rows = as_int(0, this$UiDesigner.input_size_rows.val());
      var cols = as_int(0, this$UiDesigner.input_size_cols.val());
      if (rows < 2 || rows > 100 || cols < 2 || cols > 100) {
        ok_dialog('invalid size, constraint : 2 <= rows,cols <= 100');
      }
       else {
        this$UiDesigner.send_tdftr5$(new ds_map_size_specified(rows, cols));
      }
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_1(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_brush_click(loc_empty_getInstance()));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_2(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_brush_click(loc_player_getInstance()));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_3(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_brush_click(loc_wall_getInstance()));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_4(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_brush_click(loc_key_getInstance()));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_5(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_brush_click(new loc_door(false)));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_6(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_brush_click(new loc_door(true)));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_7(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_mode_picked(dsm_painting_getInstance()));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_8(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_mode_picked(dsm_configuring_getInstance()));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_9(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(ds_done_getInstance());
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_10(this$UiDesigner) {
    return function (it) {
      this$UiDesigner.send_tdftr5$(ds_canvas_mouse_up_getInstance());
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_11(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_mode_picked(dsm_configuring_getInstance()));
      return Unit;
    };
  }
  function UiDesigner$setup$lambda_12(this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(ds_add_to_menu_getInstance());
      return Unit;
    };
  }
  UiDesigner.prototype.setup = function () {
    this.container.append(this.root);
    this.root.append(this.file_picker).append(this.size_picker).append(this.editor).append(this.finalizer);
    empty_div().text('click new for a new map, or drag-drop an existing map').appendTo(this.file_picker);
    this.new_file_button.text('New').appendTo(this.file_picker).click(UiDesigner$setup$lambda(this));
    br().appendTo(this.file_picker);
    this.quit_button_61zpoe$().appendTo(this.file_picker);
    div_label('Specify size').appendTo(this.size_picker);
    span_label('Rows : ').appendTo(this.size_picker);
    this.input_size_rows.appendTo(this.size_picker);
    br().appendTo(this.size_picker);
    span_label('Cols : ').appendTo(this.size_picker);
    this.input_size_cols.appendTo(this.size_picker);
    br().appendTo(this.size_picker);
    empty_button().text('Next').appendTo(this.size_picker).click(UiDesigner$setup$lambda_0(this));
    br().appendTo(this.size_picker);
    this.quit_button_61zpoe$().appendTo(this.size_picker);
    span_label('Brushes: ').appendTo(this.brush_box);
    this.brush_box.appendTo(this.editor);
    empty_button().text('Empty').appendTo(this.brush_box).click(UiDesigner$setup$lambda_1(this));
    empty_button().text('Player').appendTo(this.brush_box).click(UiDesigner$setup$lambda_2(this));
    empty_button().text('Wall').appendTo(this.brush_box).click(UiDesigner$setup$lambda_3(this));
    empty_button().text('Key').appendTo(this.brush_box).click(UiDesigner$setup$lambda_4(this));
    empty_button().text('Door (Closed)').appendTo(this.brush_box).click(UiDesigner$setup$lambda_5(this));
    empty_button().text('Door (Opened)').appendTo(this.brush_box).click(UiDesigner$setup$lambda_6(this));
    this.canvas.appendTo(this.editor);
    this.configure_box.appendTo(this.editor);
    this.quit_button_61zpoe$().appendTo(this.editor);
    this.to_painting.text('Go to Paint Mode').appendTo(this.editor).click(UiDesigner$setup$lambda_7(this));
    this.to_config.text('Go to Configuration Mode').appendTo(this.editor).click(UiDesigner$setup$lambda_8(this));
    this.editing_done.text('Finish').appendTo(this.editor).click(UiDesigner$setup$lambda_9(this));
    this.canvas.on('mouseup', UiDesigner$setup$lambda_10(this));
    empty_button().text('Back to editing').click(UiDesigner$setup$lambda_11(this)).appendTo(this.finalizer);
    this.level_download_a.text('Download map').appendTo(this.finalizer);
    empty_button().text('Add map to menu').click(UiDesigner$setup$lambda_12(this)).appendTo(this.finalizer);
    this.quit_button_61zpoe$().text('Back to menu').appendTo(this.finalizer);
  };
  UiDesigner.prototype.reset = function () {
    this.painting_activated = false;
    this.current_brush = loc_empty_getInstance();
    this.state = dstate_just_started_getInstance();
  };
  UiDesigner.prototype.process_6pyhvj$ = function (st, sim) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var nothing = new Pair(st, []);
    if (Kotlin.isType(sim, ds_started)) {
      if (Kotlin.isType(st, dstate_just_started))
        tmp$_5 = new Pair(dstate_file_picking_getInstance(), [dcmd_show_new_or_existing_getInstance()]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_new)) {
      if (Kotlin.isType(st, dstate_file_picking))
        tmp$_5 = new Pair(dstate_size_picking_getInstance(), [dcmd_show_size_picker_getInstance()]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_map_size_specified)) {
      if (Kotlin.isType(st, dstate_size_picking))
        tmp$_5 = new Pair(dstate_painting_getInstance(), [new dcmd_load_new_file(sim.rows, sim.cols), new dcmd_pick_brush(loc_empty_getInstance()), new dcmd_enable_brush_picker(true), dcmd_hide_config_getInstance()]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_existing)) {
      if (Kotlin.isType(st, dstate_file_picking))
        tmp$_5 = new Pair(dstate_drop_verifying_getInstance(), [new dcmd_verify_dropped_file(sim.lvl)]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_existing_verified)) {
      tmp$ = sim.success;
      if (tmp$ === true) {
        if (Kotlin.isType(st, dstate_drop_verifying))
          tmp$_5 = new Pair(dstate_painting_getInstance(), [dcmd_load_dropped_file_getInstance(), new dcmd_pick_brush(loc_empty_getInstance()), new dcmd_enable_brush_picker(true), dcmd_hide_config_getInstance()]);
        else
          tmp$_5 = nothing;
      }
       else if (tmp$ === false) {
        if (Kotlin.isType(st, dstate_drop_verifying))
          tmp$_5 = new Pair(dstate_file_picking_getInstance(), [dcmd_show_map_invalid_getInstance(), dcmd_discard_dropped_file_getInstance()]);
        else
          tmp$_5 = nothing;
      }
       else
        tmp$_5 = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(sim, ds_canvas_mouse_down)) {
      if (Kotlin.isType(st, dstate_painting))
        tmp$_5 = new Pair(dstate_painting_getInstance(), [new dcmd_activate_painting(true), new dcmd_paint_at_coord(sim.c, this.current_brush)]);
      else if (Kotlin.isType(st, dstate_configuring)) {
        tmp$_0 = this.board_tile_ewn8ib$(sim.c);
        if (Kotlin.isType(tmp$_0, loc_player))
          tmp$_5 = new Pair(dstate_configuring_getInstance(), [dcmd_hide_config_getInstance(), new dcmd_showadd_map_config(sim.c), dcmd_clear_selection_getInstance(), new dcmd_show_selection(sim.c)]);
        else if (Kotlin.isType(tmp$_0, loc_door))
          tmp$_5 = new Pair(dstate_configuring_getInstance(), [dcmd_hide_config_getInstance(), new dcmd_showadd_door_config(sim.c), dcmd_clear_selection_getInstance(), new dcmd_show_selection(sim.c)]);
        else if (Kotlin.isType(tmp$_0, loc_key))
          tmp$_5 = new Pair(dstate_configuring_getInstance(), [dcmd_hide_config_getInstance(), new dcmd_showadd_key_config(sim.c), dcmd_clear_selection_getInstance(), new dcmd_show_selection(sim.c)]);
        else
          tmp$_5 = nothing;
      }
       else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_canvas_mouse_in)) {
      if (Kotlin.isType(st, dstate_painting)) {
        tmp$_1 = this.painting_activated;
        if (tmp$_1 === true)
          tmp$_5 = new Pair(dstate_painting_getInstance(), [new dcmd_paint_at_coord(sim.c, this.current_brush)]);
        else if (tmp$_1 === false)
          tmp$_5 = nothing;
        else
          tmp$_5 = Kotlin.noWhenBranchMatched();
      }
       else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_canvas_mouse_up)) {
      if (Kotlin.isType(st, dstate_painting)) {
        tmp$_2 = this.painting_activated;
        if (tmp$_2 === true)
          tmp$_5 = new Pair(dstate_painting_getInstance(), [new dcmd_activate_painting(false)]);
        else if (tmp$_2 === false)
          tmp$_5 = nothing;
        else
          tmp$_5 = Kotlin.noWhenBranchMatched();
      }
       else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_brush_click)) {
      if (Kotlin.isType(st, dstate_painting))
        tmp$_5 = new Pair(dstate_painting_getInstance(), [new dcmd_pick_brush(sim.l)]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_mode_picked)) {
      tmp$_3 = sim.m;
      if (Kotlin.isType(tmp$_3, dsm_configuring)) {
        if (Kotlin.isType(st, dstate_painting))
          tmp$_5 = new Pair(dstate_configuring_getInstance(), [new dcmd_enable_brush_picker(false), dcmd_hide_config_getInstance(), dcmd_clear_selection_getInstance()]);
        else if (Kotlin.isType(st, dstate_finalizing))
          tmp$_5 = new Pair(dstate_configuring_getInstance(), [new dcmd_show_done_screen(false), new dcmd_enable_brush_picker(false), dcmd_hide_config_getInstance(), dcmd_clear_selection_getInstance()]);
        else
          tmp$_5 = nothing;
      }
       else if (Kotlin.isType(tmp$_3, dsm_painting)) {
        if (Kotlin.isType(st, dstate_configuring))
          tmp$_5 = new Pair(dstate_painting_getInstance(), [dcmd_hide_config_getInstance(), new dcmd_enable_brush_picker(true), dcmd_clear_selection_getInstance()]);
        else
          tmp$_5 = nothing;
      }
       else
        tmp$_5 = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(sim, ds_done)) {
      if (Kotlin.isType(st, dstate_configuring))
        tmp$_5 = new Pair(dstate_edit_verifying_getInstance(), [dcmd_verify_editing_getInstance()]);
      else if (Kotlin.isType(st, dstate_painting))
        tmp$_5 = new Pair(dstate_edit_verifying_getInstance(), [dcmd_verify_editing_getInstance()]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_editing_verified)) {
      if (Kotlin.isType(st, dstate_edit_verifying)) {
        tmp$_4 = sim.bv;
        if (tmp$_4 === false)
          tmp$_5 = new Pair(dstate_configuring_getInstance(), [dcmd_hide_config_getInstance(), new dcmd_enable_brush_picker(false), dcmd_clear_selection_getInstance(), dcmd_show_map_invalid_getInstance()]);
        else if (tmp$_4 === true)
          tmp$_5 = new Pair(dstate_finalizing_getInstance(), [dcmd_prepare_file_getInstance(), new dcmd_show_done_screen(true)]);
        else
          tmp$_5 = Kotlin.noWhenBranchMatched();
      }
       else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_download)) {
      if (Kotlin.isType(st, dstate_finalizing))
        tmp$_5 = new Pair(dstate_finalizing_getInstance(), [dcmd_offer_download_getInstance()]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_add_to_menu)) {
      if (Kotlin.isType(st, dstate_finalizing))
        tmp$_5 = new Pair(dstate_finalizing_getInstance(), [dcmd_add_to_menu_getInstance()]);
      else
        tmp$_5 = nothing;
    }
     else if (Kotlin.isType(sim, ds_quit))
      tmp$_5 = new Pair(dstate_exiting_getInstance(), [dcmd_back_to_menu_getInstance()]);
    else
      tmp$_5 = Kotlin.noWhenBranchMatched();
    return tmp$_5;
  };
  function UiDesigner$send$lambda(closure$curst, closure$stim, this$UiDesigner) {
    return function () {
      var tmp$;
      var tmp$_0 = this$UiDesigner.process_6pyhvj$(closure$curst, closure$stim);
      var nstate = tmp$_0.component1()
      , cmds = tmp$_0.component2();
      this$UiDesigner.state = nstate;
      for (tmp$ = 0; tmp$ !== cmds.length; ++tmp$) {
        var cmd = cmds[tmp$];
        this$UiDesigner.run_command_ktla9y$(cmd);
      }
      return Unit;
    };
  }
  UiDesigner.prototype.send_tdftr5$ = function (stim) {
    var curst = this.state;
    sched_0(0, UiDesigner$send$lambda(curst, stim, this));
  };
  UiDesigner.prototype.file_dropped_61zpoe$ = function (contents) {
    this.send_tdftr5$(new ds_existing(new existing_level(contents)));
  };
  UiDesigner.prototype.show_file_picker = function () {
    this.root.children().hide();
    this.file_picker.show();
  };
  UiDesigner.prototype.show_size_picker = function () {
    this.root.children().hide();
    this.size_picker.show();
  };
  UiDesigner.prototype.show_editor = function () {
    this.root.children().hide();
    this.editor.show();
  };
  function UiDesigner$setup_editor$lambda(closure$ir, closure$ic, this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_canvas_mouse_down(new coords(closure$ir, closure$ic)));
      return Unit;
    };
  }
  function UiDesigner$setup_editor$lambda_0(closure$ir, closure$ic, this$UiDesigner) {
    return function (f) {
      this$UiDesigner.send_tdftr5$(new ds_canvas_mouse_in(new coords(closure$ir, closure$ic)));
      return Unit;
    };
  }
  UiDesigner.prototype.setup_editor = function () {
    var tmp$, tmp$_0;
    this.canvas.children().remove();
    var table_0 = table().addClass(cls_maze_table).addClass('design-phase');
    table_0.appendTo(this.canvas);
    table_0.append(table_head());
    this.canvas_body = table_body();
    table_0.append(this.canvas_body);
    tmp$ = withIndex(this.current_existing.board).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var ir = tmp$_1.component1()
      , row = tmp$_1.component2();
      var trow = table_row();
      this.canvas_body.append(trow);
      tmp$_0 = withIndex(row).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var ic = tmp$_2.component1()
        , loc = tmp$_2.component2();
        var td = table_data();
        trow.append(td);
        td.attr('class', loc_to_decor_cls(loc));
        td.on('mousedown', UiDesigner$setup_editor$lambda(ir, ic, this)).on('mouseover', UiDesigner$setup_editor$lambda_0(ir, ic, this));
      }
    }
  };
  UiDesigner.prototype.show_finalizer = function () {
    this.root.children().hide();
    this.finalizer.show();
  };
  UiDesigner.prototype.run = function () {
    this.reset();
    this.send_tdftr5$(ds_started_getInstance());
  };
  UiDesigner.prototype.run_command_ktla9y$ = function (cmd) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType(cmd, dcmd_show_new_or_existing))
      this.show_file_picker();
    else if (Kotlin.isType(cmd, dcmd_verify_dropped_file)) {
      tmp$ = cmd.lvl.verify();
      if (tmp$ === true) {
        this.current_existing = cmd.lvl;
        this.send_tdftr5$(new ds_existing_verified(true));
      }
       else if (tmp$ === false)
        this.send_tdftr5$(new ds_existing_verified(false));
    }
     else if (Kotlin.isType(cmd, dcmd_load_dropped_file)) {
      this.setup_editor();
      this.show_editor();
    }
     else if (!Kotlin.isType(cmd, dcmd_discard_dropped_file))
      if (Kotlin.isType(cmd, dcmd_show_size_picker))
        this.show_size_picker();
      else if (Kotlin.isType(cmd, dcmd_load_new_file)) {
        this.current_existing.setup_vux9f0$(cmd.rows, cmd.cols);
        this.setup_editor();
        this.show_editor();
      }
       else if (Kotlin.isType(cmd, dcmd_back_to_menu))
        this.send_to_menu(stls_back_from_designer_getInstance());
      else if (Kotlin.isType(cmd, dcmd_activate_painting))
        this.painting_activated = cmd.bv;
      else if (Kotlin.isType(cmd, dcmd_paint_at_coord)) {
        this.current_existing.board.get_za3lpa$(cmd.c.row).set_wxm5ur$(cmd.c.col, cmd.l);
        this.canvas_body.children().eq(cmd.c.row).children().eq(cmd.c.col).attr('class', loc_to_decor_cls(cmd.l));
      }
       else if (Kotlin.isType(cmd, dcmd_pick_brush))
        this.current_brush = cmd.l;
      else if (Kotlin.isType(cmd, dcmd_enable_brush_picker)) {
        tmp$_0 = cmd.bv;
        if (tmp$_0 === true) {
          this.brush_box.show();
          this.to_painting.hide();
          this.to_config.show();
        }
         else if (tmp$_0 === false) {
          this.brush_box.hide();
          this.to_painting.show();
          this.to_config.hide();
        }
         else
          Kotlin.noWhenBranchMatched();
      }
       else if (Kotlin.isType(cmd, dcmd_hide_config)) {
        this.save_config();
        this.configure_box.hide();
      }
       else if (Kotlin.isType(cmd, dcmd_show_selection))
        this.canvas_body.children().eq(cmd.c.row).children().eq(cmd.c.col).text('X');
      else if (Kotlin.isType(cmd, dcmd_clear_selection))
        this.canvas_body.find('td').text('');
      else if (Kotlin.isType(cmd, dcmd_showadd_key_config))
        this.configure_key_at_ewn8ib$(cmd.c);
      else if (Kotlin.isType(cmd, dcmd_showadd_door_config))
        this.configure_door_at_ewn8ib$(cmd.c);
      else if (Kotlin.isType(cmd, dcmd_showadd_map_config))
        this.configure_player_at_ewn8ib$(cmd.c);
      else if (Kotlin.isType(cmd, dcmd_verify_editing)) {
        this.save_config();
        this.send_tdftr5$(new ds_editing_verified(loc_map_valid(this.current_existing.board)));
      }
       else if (Kotlin.isType(cmd, dcmd_show_map_invalid))
        ok_dialog('map is invalid');
      else if (Kotlin.isType(cmd, dcmd_show_done_screen)) {
        tmp$_1 = cmd.bv;
        if (tmp$_1 === true) {
          this.save_config();
          this.show_finalizer();
        }
         else if (tmp$_1 === false)
          this.show_editor();
      }
       else if (Kotlin.isType(cmd, dcmd_prepare_file))
        this.level_download_a.attr('href', json_download_url(this.current_existing.prepare_json()));
      else if (!Kotlin.isType(cmd, dcmd_offer_download))
        if (Kotlin.isType(cmd, dcmd_add_to_menu))
          this.add_to_menu(this.current_existing.make_level());
        else
          Kotlin.noWhenBranchMatched();
  };
  function UiDesigner$save_config$lambda() {
    return Unit;
  }
  UiDesigner.prototype.save_config = function () {
    this.config_writer();
    this.config_writer = UiDesigner$save_config$lambda;
  };
  function UiDesigner$configure_key_at$lambda(closure$fuel_input, this$UiDesigner, closure$c) {
    return function () {
      var $receiver = this$UiDesigner.current_existing.key_fuel_int;
      var key = closure$c;
      var value = as_int(0, closure$fuel_input.val());
      $receiver.put_xwzc9p$(key, value);
      return Unit;
    };
  }
  UiDesigner.prototype.configure_key_at_ewn8ib$ = function (c) {
    this.save_config();
    this.configure_box.show();
    this.configure_box.children().remove();
    var fuel_input = html_input().val('0');
    span_label('Fuel : ').appendTo(this.configure_box);
    fuel_input.appendTo(this.configure_box);
    var kf = this.current_existing.key_fuel_int.get_11rb$(c);
    if (kf != null) {
      fuel_input.val(kf.toString());
    }
    this.config_writer = UiDesigner$configure_key_at$lambda(fuel_input, this, c);
  };
  function UiDesigner$configure_door_at$lambda(this$UiDesigner, closure$c, closure$opened_input) {
    return function (f) {
      this$UiDesigner.canvas_body.children().eq(closure$c.row).children().eq(closure$c.col).attr('class', loc_to_decor_cls(new loc_door(checked(closure$opened_input))));
      return Unit;
    };
  }
  function UiDesigner$configure_door_at$lambda_0(closure$keys_input, this$UiDesigner, closure$c, closure$opened_input) {
    return function () {
      var $receiver = this$UiDesigner.current_existing.door_keys_int;
      var key = closure$c;
      var value = as_int(1, closure$keys_input.val());
      $receiver.put_xwzc9p$(key, value);
      var _door = this$UiDesigner.current_existing.board.get_za3lpa$(closure$c.row).get_za3lpa$(closure$c.col);
      if (Kotlin.isType(_door, loc_door)) {
        this$UiDesigner.current_existing.board.get_za3lpa$(closure$c.row).set_wxm5ur$(closure$c.col, new loc_door(checked(closure$opened_input)));
        this$UiDesigner.canvas_body.children().eq(closure$c.row).children().eq(closure$c.col).attr('class', loc_to_decor_cls(new loc_door(checked(closure$opened_input))));
      }
      return Unit;
    };
  }
  UiDesigner.prototype.configure_door_at_ewn8ib$ = function (c) {
    this.save_config();
    this.configure_box.show();
    this.configure_box.children().remove();
    var keys_input = html_input();
    var opened_input = html_input('checkbox');
    span_label('Keys : ').appendTo(this.configure_box);
    keys_input.appendTo(this.configure_box).val('1');
    br().appendTo(this.configure_box);
    span_label('Opened : ').appendTo(this.configure_box);
    opened_input.appendTo(this.configure_box);
    var door = this.current_existing.board.get_za3lpa$(c.row).get_za3lpa$(c.col);
    if (Kotlin.isType(door, loc_door))
      checked_0(opened_input, door.opened);
    opened_input.on('change', UiDesigner$configure_door_at$lambda(this, c, opened_input));
    var dk = this.current_existing.door_keys_int.get_11rb$(c);
    if (dk != null) {
      keys_input.val(dk.toString());
    }
    this.config_writer = UiDesigner$configure_door_at$lambda_0(keys_input, this, c, opened_input);
  };
  function UiDesigner$configure_player_at$add_with_label(this$UiDesigner) {
    return function (l, w, v) {
      span_label(l).appendTo(this$UiDesigner.configure_box);
      w.appendTo(this$UiDesigner.configure_box).val(v);
      br().appendTo(this$UiDesigner.configure_box);
    };
  }
  function UiDesigner$configure_player_at$lambda(closure$tick_interval_input, closure$max_fuel_input, closure$starting_fuel_input, closure$tick_cost_input, closure$move_cost_input, closure$name_input, this$UiDesigner, closure$c) {
    return function () {
      var $receiver = this$UiDesigner.current_existing.player_config;
      var key = closure$c;
      var value = new player_config_tile(as_double(1000.0, closure$tick_interval_input.val()), as_int(1000, closure$max_fuel_input.val()), as_int(750, closure$starting_fuel_input.val()), as_int(5, closure$tick_cost_input.val()), as_int(20, closure$move_cost_input.val()), closure$name_input.val());
      $receiver.put_xwzc9p$(key, value);
      return Unit;
    };
  }
  UiDesigner.prototype.configure_player_at_ewn8ib$ = function (c) {
    this.save_config();
    this.configure_box.show();
    this.configure_box.children().remove();
    var tick_interval_input = html_input();
    var max_fuel_input = html_input();
    var starting_fuel_input = html_input();
    var tick_cost_input = html_input();
    var move_cost_input = html_input();
    var name_input = html_input();
    var add_with_label = UiDesigner$configure_player_at$add_with_label(this);
    add_with_label('Tick Interval (millis) : ', tick_interval_input, '1000');
    add_with_label('Max Fuel : ', max_fuel_input, '1000');
    add_with_label('Starting Fuel : ', starting_fuel_input, '750');
    add_with_label('Fuel cost per tick : ', tick_cost_input, '5');
    add_with_label('Fuel per move : ', move_cost_input, '10');
    add_with_label('Name : ', name_input, 'Tobor, The Robot');
    var svals = this.current_existing.player_config.get_11rb$(c);
    if (svals != null) {
      tick_interval_input.val(svals.tick_interval.toString());
      max_fuel_input.val(svals.max_fuel.toString());
      starting_fuel_input.val(svals.starting_fuel.toString());
      tick_cost_input.val(svals.tick_cost.toString());
      move_cost_input.val(svals.move_cost.toString());
      name_input.val(svals.name.toString());
    }
    this.config_writer = UiDesigner$configure_player_at$lambda(tick_interval_input, max_fuel_input, starting_fuel_input, tick_cost_input, move_cost_input, name_input, this, c);
  };
  function UiDesigner$config_writer$lambda() {
    return Unit;
  }
  UiDesigner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UiDesigner',
    interfaces: []
  };
  function Executor() {
    this.m_app_state = appst_launched_getInstance();
    this.builtin_levels = [];
    this.selected_level = demo_level;
    this.current_fuel = new game_fuel(0);
    this.current_keys = 0;
    this.m_process_move = null;
    this.cls_main = '.main';
    this.m_ui_game = new UiGame(this.m_main, Executor$m_ui_game$lambda(this), Executor$m_ui_game$lambda_0(this));
    this.m_ui_postgame = empty_div();
    this.m_ui_menu = new UiMenu(this.m_main, Executor$m_ui_menu$lambda(this));
    this.m_ui_designer = new UiDesigner(this.m_main, Executor$m_ui_designer$lambda(this), Executor$m_ui_designer$lambda_0(this));
    this.m_ui_replay = empty_div();
    this.pgm_message = empty_div();
    this.t_last_time = 0.0;
    this.timer_handle = null;
    this.t_rem_time = 0.0;
  }
  function Executor$run$lambda(evt) {
    evt.preventDefault();
    return Unit;
  }
  function Executor$run$lambda_0(this$Executor) {
    return function (evt) {
      evt.preventDefault();
      var files = evt.originalEvent.dataTransfer.files;
      if (files.length === 1) {
        this$Executor.file_dropped_f1tr9h$(files.item(0));
      }
      return Unit;
    };
  }
  Executor.prototype.run = function () {
    jQuery(window).on('dragover', Executor$run$lambda);
    jQuery(window).on('drop', Executor$run$lambda_0(this));
    this.send_dt6e7r$(stls_launched_getInstance());
  };
  function Executor$send$lambda(this$Executor, closure$stim) {
    return function () {
      var tmp$;
      var cmds = process(this$Executor.m_app_state, closure$stim);
      for (tmp$ = 0; tmp$ !== cmds.length; ++tmp$) {
        var cmd = cmds[tmp$];
        this$Executor.run_command_z2l7oc$(cmd);
      }
      return Unit;
    };
  }
  Executor.prototype.send_dt6e7r$ = function (stim) {
    sched_0(0, Executor$send$lambda(this, stim));
  };
  Executor.prototype.current_tick_cost = function () {
    return this.selected_level.tick_cost.remaining;
  };
  Executor.prototype.current_move_cost = function () {
    return this.selected_level.move_cost.remaining;
  };
  Executor.prototype.current_max_fuel = function () {
    return this.selected_level.max_fuel.remaining;
  };
  Executor.prototype.run_command_z2l7oc$ = function (cmd) {
    var tmp$;
    if (Kotlin.isType(cmd, cmd_setup_ui))
      this.setup_ui();
    else if (Kotlin.isType(cmd, cmd_set_state))
      this.m_app_state = cmd.state;
    else if (Kotlin.isType(cmd, cmd_select_ui))
      this.select_ui_w3erzd$(cmd.ui);
    else if (Kotlin.isType(cmd, cmd_menu_fetch_builtin_levels)) {
      if (loc_map_valid(demo_level.board)) {
        this.builtin_levels = [demo_level, osg_level];
        this.send_dt6e7r$(stls_menu_levels_fetched_getInstance());
      }
    }
     else if (Kotlin.isType(cmd, cmd_menu_populate))
      this.m_ui_menu.populate_levels_r2nzix$(this.builtin_levels);
    else if (Kotlin.isType(cmd, cmd_menu_select_level))
      this.selected_level = this.builtin_levels[cmd.li];
    else if (Kotlin.isType(cmd, cmd_game_timer))
      this.m_timer_control_snd3f0$(cmd.tc);
    else if (!Kotlin.isType(cmd, cmd_game_pause))
      if (Kotlin.isType(cmd, cmd_game_fuel_tick)) {
        tmp$ = this.current_fuel;
        tmp$.remaining = tmp$.remaining - this.current_tick_cost() | 0;
        this.m_ui_game.set_fuel_vux9f0$(this.current_fuel.remaining, this.current_max_fuel());
        if (this.current_fuel.remaining <= 0) {
          this.send_dt6e7r$(stls_game_fuel_empty_getInstance());
        }
      }
       else if (Kotlin.isType(cmd, cmd_game_process_move)) {
        var pm = this.m_process_move;
        if (pm != null) {
          var tmp$_0;
          var mcmds = pm.invoke_u0l1by$(cmd.m);
          for (tmp$_0 = 0; tmp$_0 !== mcmds.length; ++tmp$_0) {
            var mcmd = mcmds[tmp$_0];
            this.run_move_command_lxs97w$(mcmd);
          }
        }
      }
       else if (Kotlin.isType(cmd, cmd_postgame_reset_map))
        this.m_ui_game.reset();
      else if (Kotlin.isType(cmd, cmd_postgame_set_theme))
        this.setpgm_msg_6taknv$(cmd.is_vict);
      else if (!Kotlin.isType(cmd, cmd_postgame_prepare_replay))
        if (!Kotlin.isType(cmd, cmd_postgame_offer_replay_download))
          if (Kotlin.isType(cmd, cmd_transfer_to_designer))
            this.m_ui_designer.run();
  };
  function Executor$iterboard$lambda(closure$row, closure$ic) {
    return function (xl) {
      closure$row.set_wxm5ur$(closure$ic.v, xl);
      return Unit;
    };
  }
  Executor.prototype.iterboard_98rqzt$ = function (fn) {
    var board = this.m_ui_game.board;
    var rows = board.size;
    var cols = board.get_za3lpa$(0).size;
    var ir = 0;
    while (ir < rows) {
      var row = board.get_za3lpa$(ir);
      var ic = {v: 0};
      while (ic.v < cols) {
        var l = row.get_za3lpa$(ic.v);
        fn(new coords(ir, ic.v), l, Executor$iterboard$lambda(row, ic));
        ic.v = ic.v + 1 | 0;
      }
      ir = ir + 1 | 0;
    }
  };
  function Executor$update_doors$lambda(this$Executor) {
    return function (c, l, setter) {
      if (Kotlin.isType(l, loc_door)) {
        if (l.opened === false) {
          if (this$Executor.current_keys >= this$Executor.selected_level.door_keys_ewn8ib$(c) === true) {
            setter(new loc_door(true));
            this$Executor.m_ui_game.update_coords_vfdyyj$(c, new loc_door(true));
          }
        }
      }
      return Unit;
    };
  }
  Executor.prototype.update_doors = function () {
    this.iterboard_98rqzt$(Executor$update_doors$lambda(this));
  };
  Executor.prototype.run_move_command_lxs97w$ = function (cmd) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(cmd, mvcmd_update_coords))
      this.m_ui_game.update_coords_vfdyyj$(cmd.c, cmd.l);
    else if (Kotlin.isType(cmd, mvcmd_key_update_doors)) {
      this.current_keys = this.current_keys + 1 | 0;
      this.update_doors();
    }
     else if (Kotlin.isType(cmd, mvcmd_trigger_victory))
      this.send_dt6e7r$(stls_game_victory_getInstance());
    else if (Kotlin.isType(cmd, mvcmd_expend_fuel)) {
      tmp$ = this.current_fuel;
      tmp$.remaining = tmp$.remaining - this.current_move_cost() | 0;
      if (this.current_fuel.remaining > this.selected_level.max_fuel.remaining) {
        this.current_fuel.remaining = this.selected_level.max_fuel.remaining;
      }
      if (this.current_fuel.remaining <= 0) {
        this.send_dt6e7r$(stls_game_fuel_empty_getInstance());
      }
      this.m_ui_game.set_fuel_vux9f0$(this.current_fuel.remaining, this.current_max_fuel());
    }
     else if (Kotlin.isType(cmd, mvcmd_update_player_coords)) {
      this.m_ui_game.src.row = cmd.c.row;
      this.m_ui_game.src.col = cmd.c.col;
    }
     else if (!Kotlin.isType(cmd, mvcmd_append_to_replay))
      if (Kotlin.isType(cmd, mvcmd_add_fuel)) {
        var topup = this.selected_level.key_fuel_ewn8ib$(cmd.c).remaining;
        tmp$_0 = this.current_fuel;
        tmp$_0.remaining = tmp$_0.remaining + topup | 0;
        if (this.current_fuel.remaining > this.selected_level.max_fuel.remaining) {
          this.current_fuel.remaining = this.selected_level.max_fuel.remaining;
        }
        if (this.current_fuel.remaining <= 0) {
          this.send_dt6e7r$(stls_game_fuel_empty_getInstance());
        }
        this.m_ui_game.set_fuel_vux9f0$(this.current_fuel.remaining, this.current_max_fuel());
      }
  };
  Executor.prototype.add_to_menu_77zyaz$ = function (l) {
    this.builtin_levels = this.builtin_levels.concat([l]);
    this.m_ui_menu.populate_levels_r2nzix$(this.builtin_levels);
  };
  Object.defineProperty(Executor.prototype, 'm_main', {
    get: function () {
      return jQuery(this.cls_main);
    }
  });
  Executor.prototype.setpgm_msg_6taknv$ = function (did_we_win) {
    if (did_we_win === true)
      _discard(this.pgm_message.text('Victory !'));
    else if (did_we_win === false)
      _discard(this.pgm_message.text('Game Over :('));
    else
      Kotlin.noWhenBranchMatched();
  };
  function Executor$setup_ui$lambda(this$Executor) {
    return function (evt) {
      this$Executor.key_released_za3lpa$(evt.which);
      return Unit;
    };
  }
  function Executor$setup_ui$lambda_0(this$Executor) {
    return function (f) {
      this$Executor.send_dt6e7r$(stls_postgame_play_again_getInstance());
      return Unit;
    };
  }
  function Executor$setup_ui$lambda_1(this$Executor) {
    return function (f) {
      this$Executor.send_dt6e7r$(stls_postgame_goto_menu_getInstance());
      return Unit;
    };
  }
  Executor.prototype.setup_ui = function () {
    this.m_ui_menu.setup();
    this.m_ui_game.setup();
    this.m_ui_designer.setup();
    this.m_main.append(this.m_ui_postgame);
    this.m_main.children().hide();
    jQuery(document).keydown(Executor$setup_ui$lambda(this));
    this.pgm_message.appendTo(this.m_ui_postgame);
    empty_button().text('Play Again').appendTo(this.m_ui_postgame).click(Executor$setup_ui$lambda_0(this));
    empty_button().text('Back to Menu').appendTo(this.m_ui_postgame).click(Executor$setup_ui$lambda_1(this));
  };
  Executor.prototype.key_released_za3lpa$ = function (code) {
    if (code === 37)
      this.send_dt6e7r$(new stls_game_moved(mv_left_getInstance()));
    else if (code === 39)
      this.send_dt6e7r$(new stls_game_moved(mv_right_getInstance()));
    else if (code === 38)
      this.send_dt6e7r$(new stls_game_moved(mv_up_getInstance()));
    else if (code === 40)
      this.send_dt6e7r$(new stls_game_moved(mv_down_getInstance()));
  };
  Executor.prototype.select_ui_w3erzd$ = function (ui) {
    this.m_main.children().hide();
    this.m_process_move = null;
    if (Kotlin.isType(ui, ui_game))
      this.prepare_and_show_game_ui();
    else if (Kotlin.isType(ui, ui_postgame))
      this.m_ui_postgame.show();
    else if (Kotlin.isType(ui, ui_menu))
      this.m_ui_menu.show();
    else if (Kotlin.isType(ui, ui_designer))
      this.m_ui_designer.show();
    else if (Kotlin.isType(ui, ui_replay))
      this.m_ui_replay.show();
    else
      Kotlin.noWhenBranchMatched();
  };
  Executor.prototype.prepare_and_show_game_ui = function () {
    this.current_fuel.remaining = this.selected_level.starting_fuel.remaining;
    this.current_keys = 0;
    this.m_ui_game.reset();
    var board = this.m_ui_game.board;
    var mrow = board.size;
    var col = getOrNull(board, 0);
    if (col != null) {
      this.m_process_move = new process_move(mrow - 1 | 0, col.size - 1 | 0, board, this.m_ui_game.src);
    }
    this.m_ui_game.show();
    this.update_doors();
  };
  Executor.prototype.current_tick_interval = function () {
    return this.selected_level.tick_interval;
  };
  Executor.prototype.tick = function () {
    this.t_last_time = current_time();
    this.send_dt6e7r$(stls_game_tick_getInstance());
  };
  function Executor$t_interval_start$lambda$lambda(this$Executor) {
    return function () {
      this$Executor.tick();
      return Unit;
    };
  }
  function Executor$t_interval_start$lambda(this$Executor) {
    return function () {
      this$Executor.tick();
      this$Executor.timer_handle = window.setInterval(Executor$t_interval_start$lambda$lambda(this$Executor), numberToInt(this$Executor.current_tick_interval()));
      return Unit;
    };
  }
  Executor.prototype.t_interval_start_14dthe$ = function (fti) {
    sched(fti, Executor$t_interval_start$lambda(this));
  };
  Executor.prototype.t_interval_stop = function () {
    var th = this.timer_handle;
    if (th != null) {
      window.clearInterval(th);
    }
    this.timer_handle = null;
  };
  Executor.prototype.m_timer_control_snd3f0$ = function (tc) {
    if (Kotlin.isType(tc, tc_reset)) {
      this.t_rem_time = this.current_tick_interval();
      this.t_interval_stop();
    }
     else if (Kotlin.isType(tc, tc_run))
      this.t_interval_start_14dthe$(this.t_rem_time);
    else if (Kotlin.isType(tc, tc_stop)) {
      this.t_rem_time = this.current_tick_interval();
      this.t_interval_stop();
    }
     else if (Kotlin.isType(tc, tc_pause)) {
      this.t_rem_time = current_time() - this.t_last_time;
      this.t_interval_stop();
    }
  };
  function Executor$file_dropped$lambda(this$Executor) {
    return function (contents) {
      this$Executor.m_ui_designer.file_dropped_61zpoe$(contents);
      return Unit;
    };
  }
  Executor.prototype.file_dropped_f1tr9h$ = function (f) {
    if (is_json(f) && f.size < 1000000) {
      var reader = new FileReader();
      read_text_file(reader, f, Executor$file_dropped$lambda(this));
    }
  };
  function Executor$m_ui_game$lambda(this$Executor) {
    return function (s) {
      this$Executor.send_dt6e7r$(s);
      return Unit;
    };
  }
  function Executor$m_ui_game$lambda_0(this$Executor) {
    return function () {
      return this$Executor.selected_level;
    };
  }
  function Executor$m_ui_menu$lambda(this$Executor) {
    return function (s) {
      this$Executor.send_dt6e7r$(s);
      return Unit;
    };
  }
  function Executor$m_ui_designer$lambda(this$Executor) {
    return function (s) {
      this$Executor.send_dt6e7r$(s);
      return Unit;
    };
  }
  function Executor$m_ui_designer$lambda_0(this$Executor) {
    return function (l) {
      this$Executor.add_to_menu_77zyaz$(l);
      return Unit;
    };
  }
  Executor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Executor',
    interfaces: []
  };
  var executor;
  var osg_level;
  function main$lambda(it) {
    executor = new Executor();
    executor != null ? (executor.run(), Unit) : null;
    return Unit;
  }
  function main(s) {
    var elosg = new existing_level(osg_data);
    elosg.verify();
    elosg.prepare_json();
    osg_level = elosg.make_level();
    on_load(jQuery(window), main$lambda);
  }
  var package$maze = _.maze || (_.maze = {});
  package$maze._discard_mzud1t$ = _discard;
  package$maze.current_time = current_time;
  package$maze.sched_5jeynf$ = sched;
  package$maze.sched_n53o35$ = sched_0;
  package$maze.is_json_7ddkn1$ = is_json;
  package$maze.json_blob_qk3xy8$ = json_blob;
  package$maze.json_download_url_qk3xy8$ = json_download_url;
  package$maze.read_text_file_og0w7i$ = read_text_file;
  package$maze.checked_36i28u$ = checked;
  package$maze.checked_voptfn$ = checked_0;
  package$maze.on_load_8sgnnq$ = on_load;
  package$maze.span_label_61zpoe$ = span_label;
  package$maze.div_label_61zpoe$ = div_label;
  package$maze.html_input_61zpoe$ = html_input;
  package$maze.empty_div = empty_div;
  package$maze.empty_button = empty_button;
  package$maze.ahref = ahref;
  package$maze.unordered_list = unordered_list;
  package$maze.list_item = list_item;
  package$maze.br = br;
  package$maze.hr = hr;
  package$maze.table = table;
  package$maze.table_head = table_head;
  package$maze.table_body = table_body;
  package$maze.table_row = table_row;
  package$maze.table_data = table_data;
  package$maze.as_int_19mbxw$ = as_int;
  package$maze.as_double_t0es5s$ = as_double;
  package$maze.ok_dialog_tjb3vk$ = ok_dialog;
  Object.defineProperty(package$maze, 'is_opened_true', {
    get: function () {
      return is_opened_true;
    }
  });
  Object.defineProperty(package$maze, 'is_opened_false', {
    get: function () {
      return is_opened_false;
    }
  });
  package$maze.location = location;
  Object.defineProperty(package$maze, 'loc_empty', {
    get: loc_empty_getInstance
  });
  Object.defineProperty(package$maze, 'loc_player', {
    get: loc_player_getInstance
  });
  Object.defineProperty(package$maze, 'loc_wall', {
    get: loc_wall_getInstance
  });
  Object.defineProperty(package$maze, 'loc_key', {
    get: loc_key_getInstance
  });
  package$maze.loc_door = loc_door;
  package$maze.copy_loc_map_33xg90$ = copy_loc_map;
  package$maze.loc_map_count_llvwh0$ = loc_map_count;
  package$maze.board_find_llvwh0$ = board_find;
  package$maze.loc_map_valid_33xg90$ = loc_map_valid;
  package$maze.major_ui = major_ui;
  Object.defineProperty(package$maze, 'ui_game', {
    get: ui_game_getInstance
  });
  Object.defineProperty(package$maze, 'ui_postgame', {
    get: ui_postgame_getInstance
  });
  Object.defineProperty(package$maze, 'ui_menu', {
    get: ui_menu_getInstance
  });
  Object.defineProperty(package$maze, 'ui_designer', {
    get: ui_designer_getInstance
  });
  Object.defineProperty(package$maze, 'ui_replay', {
    get: ui_replay_getInstance
  });
  Object.defineProperty(package$maze, 'is_paused_true', {
    get: function () {
      return is_paused_true;
    }
  });
  Object.defineProperty(package$maze, 'is_paused_false', {
    get: function () {
      return is_paused_false;
    }
  });
  Object.defineProperty(package$maze, 'is_victorious_true', {
    get: function () {
      return is_victorious_true;
    }
  });
  Object.defineProperty(package$maze, 'is_victorious_false', {
    get: function () {
      return is_victorious_false;
    }
  });
  package$maze.app_state = app_state;
  Object.defineProperty(package$maze, 'appst_launched', {
    get: appst_launched_getInstance
  });
  package$maze.appst_game = appst_game;
  package$maze.appst_postgame = appst_postgame;
  Object.defineProperty(package$maze, 'appst_menu', {
    get: appst_menu_getInstance
  });
  Object.defineProperty(package$maze, 'appst_designer', {
    get: appst_designer_getInstance
  });
  Object.defineProperty(package$maze, 'appst_replay', {
    get: appst_replay_getInstance
  });
  package$maze.timer_control = timer_control;
  Object.defineProperty(package$maze, 'tc_reset', {
    get: tc_reset_getInstance
  });
  Object.defineProperty(package$maze, 'tc_run', {
    get: tc_run_getInstance
  });
  Object.defineProperty(package$maze, 'tc_stop', {
    get: tc_stop_getInstance
  });
  Object.defineProperty(package$maze, 'tc_pause', {
    get: tc_pause_getInstance
  });
  package$maze.coords = coords;
  package$maze.movement = movement;
  Object.defineProperty(package$maze, 'mv_up', {
    get: mv_up_getInstance
  });
  Object.defineProperty(package$maze, 'mv_left', {
    get: mv_left_getInstance
  });
  Object.defineProperty(package$maze, 'mv_right', {
    get: mv_right_getInstance
  });
  Object.defineProperty(package$maze, 'mv_down', {
    get: mv_down_getInstance
  });
  package$maze.game_fuel = game_fuel;
  package$maze.move_command = move_command;
  package$maze.mvcmd_update_coords = mvcmd_update_coords;
  Object.defineProperty(package$maze, 'mvcmd_key_update_doors', {
    get: mvcmd_key_update_doors_getInstance
  });
  Object.defineProperty(package$maze, 'mvcmd_trigger_victory', {
    get: mvcmd_trigger_victory_getInstance
  });
  Object.defineProperty(package$maze, 'mvcmd_expend_fuel', {
    get: mvcmd_expend_fuel_getInstance
  });
  package$maze.mvcmd_update_player_coords = mvcmd_update_player_coords;
  package$maze.mvcmd_append_to_replay = mvcmd_append_to_replay;
  package$maze.mvcmd_add_fuel = mvcmd_add_fuel;
  package$maze.process_move = process_move;
  package$maze.replay_command = replay_command;
  package$maze.rcmd_init = rcmd_init;
  package$maze.rcmd_loc_update = rcmd_loc_update;
  package$maze.rcmd_fuel_update = rcmd_fuel_update;
  package$maze.rcmd_finish = rcmd_finish;
  package$maze.rcmd_abort = rcmd_abort;
  package$maze.replay_context = replay_context;
  package$maze.stimulus = stimulus;
  Object.defineProperty(package$maze, 'stls_launched', {
    get: stls_launched_getInstance
  });
  Object.defineProperty(package$maze, 'stls_menu_levels_fetched', {
    get: stls_menu_levels_fetched_getInstance
  });
  package$maze.stls_menu_level_selected = stls_menu_level_selected;
  Object.defineProperty(package$maze, 'stls_menu_designer', {
    get: stls_menu_designer_getInstance
  });
  Object.defineProperty(package$maze, 'stls_menu_replay', {
    get: stls_menu_replay_getInstance
  });
  Object.defineProperty(package$maze, 'stls_back_from_designer', {
    get: stls_back_from_designer_getInstance
  });
  package$maze.stls_game_moved = stls_game_moved;
  Object.defineProperty(package$maze, 'stls_game_tick', {
    get: stls_game_tick_getInstance
  });
  package$maze.stls_game_pause = stls_game_pause;
  Object.defineProperty(package$maze, 'stls_game_quit', {
    get: stls_game_quit_getInstance
  });
  Object.defineProperty(package$maze, 'stls_game_victory', {
    get: stls_game_victory_getInstance
  });
  Object.defineProperty(package$maze, 'stls_game_fuel_empty', {
    get: stls_game_fuel_empty_getInstance
  });
  Object.defineProperty(package$maze, 'stls_postgame_goto_menu', {
    get: stls_postgame_goto_menu_getInstance
  });
  Object.defineProperty(package$maze, 'stls_postgame_play_again', {
    get: stls_postgame_play_again_getInstance
  });
  Object.defineProperty(package$maze, 'stls_postgame_download_replay', {
    get: stls_postgame_download_replay_getInstance
  });
  package$maze.command = command;
  package$maze.cmd_set_state = cmd_set_state;
  package$maze.cmd_select_ui = cmd_select_ui;
  Object.defineProperty(package$maze, 'cmd_setup_ui', {
    get: cmd_setup_ui_getInstance
  });
  Object.defineProperty(package$maze, 'cmd_menu_fetch_builtin_levels', {
    get: cmd_menu_fetch_builtin_levels_getInstance
  });
  Object.defineProperty(package$maze, 'cmd_menu_populate', {
    get: cmd_menu_populate_getInstance
  });
  package$maze.cmd_menu_select_level = cmd_menu_select_level;
  package$maze.cmd_game_timer = cmd_game_timer;
  package$maze.cmd_game_pause = cmd_game_pause;
  Object.defineProperty(package$maze, 'cmd_game_fuel_tick', {
    get: cmd_game_fuel_tick_getInstance
  });
  package$maze.cmd_game_process_move = cmd_game_process_move;
  Object.defineProperty(package$maze, 'cmd_game_init_replay', {
    get: cmd_game_init_replay_getInstance
  });
  package$maze.cmd_game_finish_replay = cmd_game_finish_replay;
  Object.defineProperty(package$maze, 'cmd_postgame_reset_map', {
    get: cmd_postgame_reset_map_getInstance
  });
  package$maze.cmd_postgame_set_theme = cmd_postgame_set_theme;
  Object.defineProperty(package$maze, 'cmd_postgame_prepare_replay', {
    get: cmd_postgame_prepare_replay_getInstance
  });
  Object.defineProperty(package$maze, 'cmd_postgame_offer_replay_download', {
    get: cmd_postgame_offer_replay_download_getInstance
  });
  Object.defineProperty(package$maze, 'cmd_transfer_to_designer', {
    get: cmd_transfer_to_designer_getInstance
  });
  package$maze.process_mg78m9$ = process;
  package$maze.level = level;
  package$maze.designer_mode = designer_mode;
  Object.defineProperty(package$maze, 'dsm_painting', {
    get: dsm_painting_getInstance
  });
  Object.defineProperty(package$maze, 'dsm_configuring', {
    get: dsm_configuring_getInstance
  });
  Object.defineProperty(json_keys, 'player_config', {
    get: json_keys$player_config_getInstance
  });
  Object.defineProperty(json_keys, 'door_config', {
    get: json_keys$door_config_getInstance
  });
  Object.defineProperty(json_keys, 'key_config', {
    get: json_keys$key_config_getInstance
  });
  Object.defineProperty(json_keys, 'rows', {
    get: json_keys$rows_getInstance
  });
  Object.defineProperty(json_keys, 'cols', {
    get: json_keys$cols_getInstance
  });
  Object.defineProperty(json_keys, 'board', {
    get: json_keys$board_getInstance
  });
  Object.defineProperty(json_keys, 'tick_interval', {
    get: json_keys$tick_interval_getInstance
  });
  Object.defineProperty(json_keys, 'max_fuel', {
    get: json_keys$max_fuel_getInstance
  });
  Object.defineProperty(json_keys, 'starting_fuel', {
    get: json_keys$starting_fuel_getInstance
  });
  Object.defineProperty(json_keys, 'tick_cost', {
    get: json_keys$tick_cost_getInstance
  });
  Object.defineProperty(json_keys, 'move_cost', {
    get: json_keys$move_cost_getInstance
  });
  Object.defineProperty(json_keys, 'map_name', {
    get: json_keys$map_name_getInstance
  });
  Object.defineProperty(json_keys, 'key_fuel', {
    get: json_keys$key_fuel_getInstance
  });
  Object.defineProperty(json_keys, 'door_keys', {
    get: json_keys$door_keys_getInstance
  });
  package$maze.json_keys = json_keys;
  package$maze.uget_9t52kr$ = uget;
  package$maze.uget_mxpdhj$ = uget_0;
  package$maze.coord_key_ewn8ib$ = coord_key;
  package$maze.coord_key_vux9f0$ = coord_key_0;
  package$maze.loc_to_decor_cls_7uyvp8$ = loc_to_decor_cls;
  package$maze.loc_to_string_7uyvp8$ = loc_to_string;
  package$maze.string_to_loc_61zpoe$ = string_to_loc;
  package$maze.json_to_map_gwbbmo$ = json_to_map;
  package$maze.map_to_json_33xg90$ = map_to_json;
  package$maze.json_to_coord_hash_hbkb20$ = json_to_coord_hash;
  package$maze.player_config_tile = player_config_tile;
  package$maze.json_to_player_config_tile_qk3xy8$ = json_to_player_config_tile;
  package$maze.player_config_tile_to_json_4a4hj0$ = player_config_tile_to_json;
  package$maze.json_to_level_qk3xy8$ = json_to_level;
  package$maze.existing_level = existing_level;
  package$maze.designer_stimulus = designer_stimulus;
  Object.defineProperty(package$maze, 'ds_started', {
    get: ds_started_getInstance
  });
  Object.defineProperty(package$maze, 'ds_new', {
    get: ds_new_getInstance
  });
  package$maze.ds_existing = ds_existing;
  package$maze.ds_existing_verified = ds_existing_verified;
  package$maze.ds_map_size_specified = ds_map_size_specified;
  Object.defineProperty(package$maze, 'ds_quit', {
    get: ds_quit_getInstance
  });
  package$maze.ds_canvas_mouse_down = ds_canvas_mouse_down;
  package$maze.ds_canvas_mouse_in = ds_canvas_mouse_in;
  Object.defineProperty(package$maze, 'ds_canvas_mouse_up', {
    get: ds_canvas_mouse_up_getInstance
  });
  package$maze.ds_brush_click = ds_brush_click;
  package$maze.ds_mode_picked = ds_mode_picked;
  Object.defineProperty(package$maze, 'ds_done', {
    get: ds_done_getInstance
  });
  package$maze.ds_editing_verified = ds_editing_verified;
  Object.defineProperty(package$maze, 'ds_download', {
    get: ds_download_getInstance
  });
  Object.defineProperty(package$maze, 'ds_add_to_menu', {
    get: ds_add_to_menu_getInstance
  });
  package$maze.designer_command = designer_command;
  Object.defineProperty(package$maze, 'dcmd_show_new_or_existing', {
    get: dcmd_show_new_or_existing_getInstance
  });
  package$maze.dcmd_verify_dropped_file = dcmd_verify_dropped_file;
  Object.defineProperty(package$maze, 'dcmd_load_dropped_file', {
    get: dcmd_load_dropped_file_getInstance
  });
  Object.defineProperty(package$maze, 'dcmd_discard_dropped_file', {
    get: dcmd_discard_dropped_file_getInstance
  });
  Object.defineProperty(package$maze, 'dcmd_show_size_picker', {
    get: dcmd_show_size_picker_getInstance
  });
  package$maze.dcmd_load_new_file = dcmd_load_new_file;
  Object.defineProperty(package$maze, 'dcmd_back_to_menu', {
    get: dcmd_back_to_menu_getInstance
  });
  package$maze.dcmd_activate_painting = dcmd_activate_painting;
  package$maze.dcmd_paint_at_coord = dcmd_paint_at_coord;
  package$maze.dcmd_pick_brush = dcmd_pick_brush;
  package$maze.dcmd_enable_brush_picker = dcmd_enable_brush_picker;
  Object.defineProperty(package$maze, 'dcmd_hide_config', {
    get: dcmd_hide_config_getInstance
  });
  package$maze.dcmd_show_selection = dcmd_show_selection;
  Object.defineProperty(package$maze, 'dcmd_clear_selection', {
    get: dcmd_clear_selection_getInstance
  });
  package$maze.dcmd_showadd_key_config = dcmd_showadd_key_config;
  package$maze.dcmd_showadd_door_config = dcmd_showadd_door_config;
  package$maze.dcmd_showadd_map_config = dcmd_showadd_map_config;
  Object.defineProperty(package$maze, 'dcmd_verify_editing', {
    get: dcmd_verify_editing_getInstance
  });
  Object.defineProperty(package$maze, 'dcmd_show_map_invalid', {
    get: dcmd_show_map_invalid_getInstance
  });
  package$maze.dcmd_show_done_screen = dcmd_show_done_screen;
  Object.defineProperty(package$maze, 'dcmd_prepare_file', {
    get: dcmd_prepare_file_getInstance
  });
  Object.defineProperty(package$maze, 'dcmd_offer_download', {
    get: dcmd_offer_download_getInstance
  });
  Object.defineProperty(package$maze, 'dcmd_add_to_menu', {
    get: dcmd_add_to_menu_getInstance
  });
  package$maze.designer_state = designer_state;
  Object.defineProperty(package$maze, 'dstate_just_started', {
    get: dstate_just_started_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_file_picking', {
    get: dstate_file_picking_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_size_picking', {
    get: dstate_size_picking_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_drop_verifying', {
    get: dstate_drop_verifying_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_painting', {
    get: dstate_painting_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_configuring', {
    get: dstate_configuring_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_edit_verifying', {
    get: dstate_edit_verifying_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_finalizing', {
    get: dstate_finalizing_getInstance
  });
  Object.defineProperty(package$maze, 'dstate_exiting', {
    get: dstate_exiting_getInstance
  });
  Object.defineProperty(package$maze, 'cls_maze_table', {
    get: function () {
      return cls_maze_table;
    }
  });
  Object.defineProperty(package$maze, 'demo_level', {
    get: function () {
      return demo_level;
    }
  });
  package$maze.UiMenu = UiMenu;
  package$maze.UiGame = UiGame;
  package$maze.UiDesigner = UiDesigner;
  package$maze.Executor = Executor;
  Object.defineProperty(package$maze, 'executor', {
    get: function () {
      return executor;
    },
    set: function (value) {
      executor = value;
    }
  });
  Object.defineProperty(package$maze, 'osg_level', {
    get: function () {
      return osg_level;
    },
    set: function (value) {
      osg_level = value;
    }
  });
  package$maze.main_kand9s$ = main;
  is_opened_true = true;
  is_opened_false = false;
  is_paused_true = true;
  is_paused_false = false;
  is_victorious_true = true;
  is_victorious_false = false;
  cls_maze_table = 'maze-table';
  demo_level = new level(mutableListOf([mutableListOf([loc_empty_getInstance(), loc_empty_getInstance(), loc_empty_getInstance(), loc_empty_getInstance(), loc_empty_getInstance()]), mutableListOf([loc_empty_getInstance(), loc_empty_getInstance(), loc_empty_getInstance(), loc_wall_getInstance(), loc_empty_getInstance()]), mutableListOf([loc_empty_getInstance(), loc_empty_getInstance(), loc_empty_getInstance(), loc_wall_getInstance(), loc_empty_getInstance()]), mutableListOf([loc_player_getInstance(), loc_empty_getInstance(), loc_key_getInstance(), loc_wall_getInstance(), new loc_door(false)])]), 300.0, new game_fuel(1000), new game_fuel(300), hashMapOf([new Pair(new coords(3, 2), new game_fuel(300))]), hashMapOf([new Pair(new coords(3, 4), 1)]), new game_fuel(5), new game_fuel(20), 'Demo-01');
  executor = null;
  osg_level = demo_level;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
