require 'test_helper'

class ChatBoxesControllerTest < ActionController::TestCase
  setup do
    @chat_box = chat_boxes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:chat_boxes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create chat_box" do
    assert_difference('ChatBox.count') do
      post :create, chat_box: { close_time: @chat_box.close_time, flight_id: @chat_box.flight_id, open_time: @chat_box.open_time }
    end

    assert_redirected_to chat_box_path(assigns(:chat_box))
  end

  test "should show chat_box" do
    get :show, id: @chat_box
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @chat_box
    assert_response :success
  end

  test "should update chat_box" do
    patch :update, id: @chat_box, chat_box: { close_time: @chat_box.close_time, flight_id: @chat_box.flight_id, open_time: @chat_box.open_time }
    assert_redirected_to chat_box_path(assigns(:chat_box))
  end

  test "should destroy chat_box" do
    assert_difference('ChatBox.count', -1) do
      delete :destroy, id: @chat_box
    end

    assert_redirected_to chat_boxes_path
  end
end
