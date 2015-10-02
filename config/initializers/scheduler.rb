require 'rufus-scheduler'
require 'HTTParty'

s = Rufus::Scheduler.singleton

s.every '5s' do
    url = 'https://flifo-qa.api.aero/flifo/v3/flights/sin/d'
    headers = {'X-apiKey' => '2cfd0827f82ceaccae7882938b4b1627', 'Accept' => 'application/json'}
    response = HTTParty.get(url, headers: headers) 
    response['flightRecord'].each do |record|
        Rails.logger.info "Hello, it's #{response}"
        airlineCode = record["operatingCarrier"]["airlineCode"]
        flightNumber = record["operatingCarrier"]["flightNumber"]
        existing_flight = Flight.where(airlineCode: airlineCode, number: flightNumber)
        if existing_flight.nil?
            new_flight = Flight.new({
                :airlineCode => airlineCode,
                :number => flightNumber,
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
    end
    Rails.logger.info "Hello, it's #{Time.now}"
    Rails.logger.flush
end
