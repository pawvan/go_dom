describe("Benchmark Suite", () => {
    it("should run the encryption benchmark", () => {
        const encryptMock = jest.fn();
        new BenchMark("Encrypt", true, false, 3900, encryptMock);
        expect(encryptMock).toHaveBeenCalled();
    });

    it("should run the decryption benchmark", () => {
        const decryptMock = jest.fn();
        new BenchMark("Decrypt", true, false, 220, decryptMock);
        expect(decryptMock).toHaveBeenCalled();
    });
});
