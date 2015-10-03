require 'test_helper'

class GatesControllerTest < ActionController::TestCase
  setup do
    @gate = gates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:gates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create gate" do
    assert_difference('Gate.count') do
      post :create, gate: { latitude: @gate.latitude, longitude: @gate.longitude, name: @gate.name }
    end

    assert_redirected_to gate_path(assigns(:gate))
  end

  test "should show gate" do
    get :show, id: @gate
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @gate
    assert_response :success
  end

  test "should update gate" do
    patch :update, id: @gate, gate: { latitude: @gate.latitude, longitude: @gate.longitude, name: @gate.name }
    assert_redirected_to gate_path(assigns(:gate))
  end

  test "should destroy gate" do
    assert_difference('Gate.count', -1) do
      delete :destroy, id: @gate
    end

    assert_redirected_to gates_path
  end
end
