class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]
  include HTTParty

  # GET /flights
  # GET /flights.json
  def index
    url = 'https://flifo-qa.api.aero/flifo/v3/flights/sin/d'
    headers = {'X-apiKey' => '2cfd0827f82ceaccae7882938b4b1627', 'Accept' => 'application/json'}
    response = HTTParty.get(url, headers: headers) 
    response['flightRecord'].each do |record|
        new_flight = Flight.new({
            :number => record["operatingCarrier"]["flightNumber"],
            :scheduled => record["scheduled"],
            :status => record['status'],
            :aircraft => record['aircraft'],
            :city => record['city'],
            :airportCode => record['airportCode'],
            :terminal => record['terminal'],
            :adi => 'd'
        })
        new_flight.save()
    end
    #puts 'Here'
    #puts response['flightRecord']
    #flight = Flight.new({
        #:airportCode => response['flightRecord'][0]['airportCode']
    #})
    #flight.save()
    @flights = Flight.all
  end

  # GET /flights/1
  # GET /flights/1.json
  def show
    render json: @flight.to_json(:include => {:chat_box => {:include => :comments}})
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
  def create
    @flight = Flight.new(flight_params)

    respond_to do |format|
      if @flight.save
        format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
        format.json { render :show, status: :created, location: @flight }
      else
        format.html { render :new }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:number, :scheduled)
    end
end
