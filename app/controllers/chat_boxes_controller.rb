class ChatBoxesController < ApplicationController
  before_action :set_chat_box, only: [:show, :edit, :update, :destroy]

  # GET /chat_boxes
  # GET /chat_boxes.json
  def index
    Rails.logger.info params
    if params.has_key?("flight_id")
        flight_id = params['flight_id']
        @chat_boxes = [Flight.find(flight_id).chat_box]
    else
        @chat_boxes = ChatBox.all
    end
  end

  # GET /chat_boxes/1
  # GET /chat_boxes/1.json
  def show
    render json: @chat_box.to_json(:include => :comments)
  end

  # GET /chat_boxes/new
  def new
    @chat_box = ChatBox.new
  end

  # GET /chat_boxes/1/edit
  def edit
  end

  # POST /chat_boxes
  # POST /chat_boxes.json
  def create
    @chat_box = ChatBox.new(chat_box_params)

    respond_to do |format|
      if @chat_box.save
        format.html { redirect_to @chat_box, notice: 'Chat box was successfully created.' }
        format.json { render :show, status: :created, location: @chat_box }
      else
        format.html { render :new }
        format.json { render json: @chat_box.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /chat_boxes/1
  # PATCH/PUT /chat_boxes/1.json
  def update
    respond_to do |format|
      if @chat_box.update(chat_box_params)
        format.html { redirect_to @chat_box, notice: 'Chat box was successfully updated.' }
        format.json { render :show, status: :ok, location: @chat_box }
      else
        format.html { render :edit }
        format.json { render json: @chat_box.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /chat_boxes/1
  # DELETE /chat_boxes/1.json
  def destroy
    @chat_box.destroy
    respond_to do |format|
      format.html { redirect_to chat_boxes_url, notice: 'Chat box was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chat_box
      @chat_box = ChatBox.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def chat_box_params
      params.require(:chat_box).permit(:open_time, :close_time, :flight_id)
    end
end
