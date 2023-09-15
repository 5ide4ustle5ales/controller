// This function is called when the page loads.
function onLoad() {
  // Do something here.

  def move_left():
  """Moves the table controller 7% to the left."""
  available_width = window.innerWidth
  table_controller_width = document.getElementById("table_controller").offsetWidth
  new_x_position = available_width * 0.07
  document.getElementById("table_controller").style.left = new_x_position - table_controller_width

def move_down():
  """Moves the table controller 7% down."""
  available_height = window.innerHeight
  table_controller_height = document.getElementById("table_controller").offsetHeight
  new_y_position = available_height * 0.07
  document.getElementById("table_controller").style.top = new_y_position

def move_right():
  """Moves the table controller 7% to the right."""
  available_width = window.innerWidth
  table_controller_width = document.getElementById("table_controller").offsetWidth
  new_x_position = available_width * 0.07
  document.getElementById("table_controller").style.left = new_x_position

def move_up():
  """Moves the table controller 7% up."""
  available_height = window.innerHeight
  table_controller_height = document.getElementById("table_controller").offsetHeight
  new_y_position = available_height * 0.07
  document.getElementById("table_controller").style.top = new_y_position - table_controller_height




}
