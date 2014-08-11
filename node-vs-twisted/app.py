from twisted.internet import protocol, reactor, endpoints


class Echo(protocol.Protocol):

  def dataReceived(self, data):
    self.transport.write(data)


class EchoFactory(protocol.Factory):

  def buildProtocol(self, addr):
    return Echo()

endpoints.serverFromString(reactor, "tcp:8124").listen(EchoFactory())
reactor.run()
